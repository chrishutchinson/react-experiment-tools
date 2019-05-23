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

const useExperiments = (componentName: string) => {
  if (!componentName) {
    throw new Error(
      "Please provide a component name when instantiating the `useExperiments()` hook"
    );
  }

  const { experiments, experimentData } = React.useContext(ExperimentContext);

  const isFeatureConditionMet = (featureName: string): boolean =>
    [...experiments].reduce((acc, [_, experiment]) => {
      if (!acc) return false;

      if (!experiment.features.hasOwnProperty(componentName)) return acc;
      if (!experiment.features[componentName].hasOwnProperty(featureName)) {
        return acc;
      }

      return checkConditions(
        experiment.features[componentName][featureName].conditions,
        experimentData
      );
    }, true);

  return {
    isFeatureConditionMet
  };
};

export default useExperiments;
