import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import useExperiments from "../../hooks/use-experiments";
import SocialButtons from "../SocialButtons";

import { ProfileContainer } from "./style";

const Profile: React.FunctionComponent = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const { checkFeatureConditionMet } = useExperiments("Profile");

  const [shouldShowImage] = checkFeatureConditionMet("show-profile-image");
  const [shouldConfirmOnConnect] = checkFeatureConditionMet(
    "confirm-on-connect"
  );
  const [
    shouldChangeConnectButtonText,
    connectButtonText
  ] = checkFeatureConditionMet("connect-button-message");
  const [
    shouldChangeSharingButtonComponent,
    sharingButtonComponent
  ] = checkFeatureConditionMet("sharing-buttons-accounts");

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

      {shouldChangeSharingButtonComponent &&
      typeof sharingButtonComponent !== "string" ? (
        <sharingButtonComponent.Component
          {...sharingButtonComponent.props}
          username="thetimes"
        />
      ) : (
        <SocialButtons username="thetimes" />
      )}

      <button disabled={isConnected} onClick={handleClick}>
        {!isConnected ? (
          <>
            {shouldChangeConnectButtonText ? connectButtonText : "Connect"}{" "}
            <FontAwesomeIcon icon={faPlusCircle} />
          </>
        ) : (
          "Connected"
        )}
      </button>
    </ProfileContainer>
  );
};

export default Profile;
