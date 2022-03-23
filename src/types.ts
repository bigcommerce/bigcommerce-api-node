export interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  authCallback: string;
  loginHost?: string;
}

export interface AuthCallbackQueryParams {
  code: string;
  scope: string;
  context: string;
}

export interface AuthResponsePayload {
  access_token: string;
  scope: string;
  user: User;
  context: string;
  account_uuid: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface VerifiedJwt {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  jti: string;
  sub: string;
  user: {
    id: number;
    email: string;
  };
  owner: {
    id: number;
    email: string;
  };
  url: string;
}
