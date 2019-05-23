import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import useExperiments from "../../hooks/use-experiments";
import SocialButtons from "../SocialButtons";

import { ProfileContainer } from "./style";

const Profile: React.FunctionComponent = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const { isFeatureConditionMet } = useExperiments("Profile");

  const shouldShowImage = isFeatureConditionMet("show-profile-image");
  const shouldConfirmOnConnect = isFeatureConditionMet("confirm-on-connect");

  const handleClick = () => {
    if (
      (shouldConfirmOnConnect &&
        window.confirm("Are you sure you want to connect?")) ||
      !shouldConfirmOnConnect
    ) {
      window.alert("You are connected!");
      setIsConnected(true);
    }
  };

  return (
    <ProfileContainer>
      {shouldShowImage && <img src="https://www.placehold.it/400x400" />}

      <h1>First Last</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <SocialButtons username="thetimes" />

      <button disabled={isConnected} onClick={handleClick}>
        {!isConnected ? (
          <>
            Connect <FontAwesomeIcon icon={faPlusCircle} />
          </>
        ) : (
          "Connected"
        )}
      </button>
    </ProfileContainer>
  );
};

export default Profile;
