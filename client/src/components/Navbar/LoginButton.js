import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button type="button" class="btn btn-dark" onClick={() => loginWithRedirect({redirectUri: "https://thetopshelff.herokuapp.com/"})}>Log In</button>;
};

export default LoginButton;                                                        