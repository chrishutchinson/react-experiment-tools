import * as React from "react";

interface ExperimentFeatureCondition {
  field: "pageViews";
  comparator?: "equals" | "greaterThan" | "lessThan";
  value: string | number;
}

type Feature =
  | {
      type: "boolean";
      conditions: ExperimentFeatureCondition[];
    }
  | {
      type: "string";
      value: string;
      conditions: ExperimentFeatureCondition[];
    }
  | {
      type: "component";
      value: {
        name: string;
        props: {
          [key: string]: any;
        };
      };
      conditions: ExperimentFeatureCondition[];
    };

export interface Experiment {
  metadata: {
    id: string;
    description: string;
  };
  features: {
    [componentName: string]: {
      [featureName: string]: Feature;
    };
  };
}

export const ExperimentContext = React.createContext(null);

interface ExperimentContextComponentProps<T> {
  experiments: Map<string, Experiment>;
  components: Map<string, React.ComponentType>;
  data: T;
}

const ExperimentContextComponent = <T extends any>({
  experiments,
  data,
  components,
  children
}: React.PropsWithChildren<ExperimentContextComponentProps<T>>) => (
  <ExperimentContext.Provider
    value={{
      experiments,
      experimentData: data,
      registeredComponents: components
    }}
  >
    {children}
  </ExperimentContext.Provider>
);

export default ExperimentContextComponent;
