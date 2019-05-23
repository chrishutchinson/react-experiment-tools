import * as React from "react";
import {
  faFacebook,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialButtonsContainer, SocialButton } from "./style";

const SocialButtons: React.FunctionComponent<{ username: string }> = ({
  username
}) => (
  <SocialButtonsContainer>
    <SocialButton
      href={`https://www.twitter.com/${username}`}
      account="twitter"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </SocialButton>
    <SocialButton
      href={`https://www.twitter.com/${username}`}
      account="facebook"
    >
      <FontAwesomeIcon icon={faFacebook} />
    </SocialButton>
    <SocialButton
      href={`https://www.twitter.com/${username}`}
      account="linkedin"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </SocialButton>
  </SocialButtonsContainer>
);

export default SocialButtons;
