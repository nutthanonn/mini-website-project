export default interface GoogleTokenResponse {
  iss: string;
  nbf: number;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
  jti: string;
  alg: string;
  kid: string;
  typ: string;
}
