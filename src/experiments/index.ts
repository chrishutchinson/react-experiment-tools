import { Experiment } from "../contexts/ExperimentContext/index.js";

import saveTheTrees from "./save-the-trees.json";
import someOtherExperiment from "./some-other-experiment.json";

const experiments = new Map<string, Experiment>([
  ["save-the-trees", saveTheTrees as Experiment],
  ["some-other-experiment", someOtherExperiment as Experiment]
]);

export default experiments;
