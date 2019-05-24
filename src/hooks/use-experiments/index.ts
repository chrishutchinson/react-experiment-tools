import * as React from "react";
import { get } from "lodash/fp";

import {
  ExperimentContext,
  Experiment
} from "../../contexts/ExperimentContext";

const comparators = {
  equals: (a: any, b: any) => a === b,
  greaterThan: (a: any, b: any) => a > b,
  lessThan: (a: any, b: any) => a < b
};

const checkConditions = (
  conditions: Experiment["features"][0][0]["conditions"],
  state: any
): boolean => {
  return conditions.reduce((acc, condition) => {
    if (!acc) return false;

    const comparatorFunction = comparators[condition.comparator || "equals"];

    return comparatorFunction(get(condition.field, state), condition.value);
  }, true);
};

const getFeatureValue = (
  feature: Experiment["features"][0][0],
  registeredComponents: Map<string, React.ComponentType>
) => {
  switch (feature.type) {
    case "boolean":
    default:
      return true;
    case "string":
      return feature.value;
    case "component":
      return {
        Component: registeredComponents.get(feature.value.name),
        props: feature.value.props
      };
  }
};

const useExperiments = (componentName: string) => {
  if (!componentName) {
    throw new Error(
      "Please provide a component name when instantiating the `useExperiments()` hook"
    );
  }

  const {
    experiments,
    experimentData,
    registeredComponents
  } = React.useContext(ExperimentContext);

  const checkFeatureConditionMet = (
    featureName: string
  ):
    | [boolean]
    | [boolean, string]
    | [
        boolean,
        { Component: React.ComponentType<any>; props: { [key: string]: any } }
      ] => {
    const conditionResult = [...experiments].reduce((acc, [_, experiment]) => {
      if (!acc) return false;

      if (!experiment.features.hasOwnProperty(componentName)) return acc;
      if (!experiment.features[componentName].hasOwnProperty(featureName)) {
        return acc;
      }

      return checkConditions(
        experiment.features[componentName][featureName].conditions,
        experimentData
      )
        ? getFeatureValue(
            experiment.features[componentName][featureName],
            registeredComponents
          )
        : false;
    }, true);

    return [!!conditionResult, conditionResult];
  };

  return {
    checkFeatureConditionMet
  };
};

export default useExperiments;
