import * as React from "react";

import ExperimentContextComponent from "../../contexts/ExperimentContext";
import Profile from "../Profile";
import experiments from "../../experiments";

import { AppContainer, ControlsContainer } from "./style";
import SocialButtons from "../SocialButtons";

interface ExperimentData {
  sessionState: {
    pageViews: number;
  };
  userState: {
    propensity: number;
  };
}

const componentMap = new Map<string, React.ComponentType<any>>([
  ["SocialButtons", SocialButtons]
]);

const App: React.FunctionComponent = () => {
  const [pageViews, setPageViews] = React.useState(1);
  const [propensity, setPropensity] = React.useState(0.5);

  const handlePageView = () => {
    setPageViews(pageViews + 1);
  };

  const handlePropensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropensity(parseFloat(e.currentTarget.value));
  };

  return (
    <ExperimentContextComponent<ExperimentData>
      experiments={experiments}
      data={{
        sessionState: {
          pageViews
        },
        userState: {
          propensity
        }
      }}
      components={componentMap}
    >
      <AppContainer>
        <ControlsContainer>
          <button onClick={handlePageView}>
            Fire page view (current count: {pageViews})
          </button>

          <div>
            {propensity.toFixed(1)}
            <input
              onChange={handlePropensityChange}
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={propensity.toString()}
            />
          </div>
        </ControlsContainer>

        <Profile />
      </AppContainer>
    </ExperimentContextComponent>
  );
};

export default App;
