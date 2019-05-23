import * as React from "react";

interface ExperimentFeatureCondition {
  field: "pageViews";
  comparator?: "equals" | "greaterThan" | "lessThan";
  value: string | number;
}

export interface Experiment {
  metadata: {
    id: string;
    description: string;
  };
  features: {
    [componentName: string]: {
      [featureName: string]: {
        conditions: ExperimentFeatureCondition[];
      };
    };
  };
}

export const ExperimentContext = React.createContext(null);

interface ExperimentContextComponentProps<T> {
  experiments: Map<string, Experiment>;
  data: T;
}

const ExperimentContextComponent = <T extends any>({
  experiments,
  data,
  children
}: React.PropsWithChildren<ExperimentContextComponentProps<T>>) => (
  <ExperimentContext.Provider
    value={{
      experiments,
      experimentData: data
    }}
  >
    {children}
  </ExperimentContext.Provider>
);

export default ExperimentContextComponent;
