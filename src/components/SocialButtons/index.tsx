import * as React from "react";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faSlack
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialButtonsContainer, SocialButton } from "./style";

const SocialButtons: React.FunctionComponent<{
  username: string;
  accounts?: string[];
}> = ({ username, accounts = ["twitter", "facebook", "linkedin"] }) => (
  <SocialButtonsContainer>
    {accounts.includes("twitter") && (
      <SocialButton
        href={`https://www.twitter.com/${username}`}
        account="twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </SocialButton>
    )}

    {accounts.includes("slack") && (
      <SocialButton href={`https://www.slack.com/${username}`} account="slack">
        <FontAwesomeIcon icon={faSlack} />
      </SocialButton>
    )}

    {accounts.includes("facebook") && (
      <SocialButton
        href={`https://www.facebook.com/${username}`}
        account="facebook"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </SocialButton>
    )}

    {accounts.includes("linkedin") && (
      <SocialButton
        href={`https://www.twitter.com/${username}`}
        account="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialButton>
    )}
  </SocialButtonsContainer>
);

export default SocialButtons;
