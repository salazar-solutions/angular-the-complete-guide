export class SignInRequest {
  email: string;
  password: string;
  returnSecureToken = true;

  constructor(init?: Partial<SignInRequest>) {
    if (init) Object.assign(this, init);
  }
}

export class SignInResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;

  constructor(init?: Partial<SignInResponse>) {
    if (init) Object.assign(this, init);
  }
}

export class LoginRequest {
  email: string;
  password: string;
  returnSecureToken = true;

  constructor(init?: Partial<LoginRequest>) {
    if (init) Object.assign(this, init);
  }
}

export class LoginResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  registered: boolean;

  constructor(init?: Partial<LoginResponse>) {
    if (init) Object.assign(this, init);
  }
}

export class RefreshTokenRequest {
  grant_type = 'refresh_token';
  refresh_token: string;
  constructor(refreshToken: string) {
    this.refresh_token = refreshToken;
  }
}

export class RefreshTokenResponse {
  expires_in: number;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

export class RequestError {
  code: number;
  message: string;
  constructor(init?: Partial<RequestError>) {
    if (init) Object.assign(this, init);
  }

  public toString = (): string => {
    return this.message;
  };
}

export class User {
  readonly userId: string;
  readonly token: string;
  readonly email: string;
  readonly refreshToken: string;
  readonly expirationDate: Date;

  private constructor(init?: Partial<User>) {
    if (init) {
      Object.assign(this, init);
      this.expirationDate = new Date(init.expirationDate);
    }
  }

  static get(init?: Partial<User>) {
    return new User(init);
  }

  static fromLoginResponse(loginResponse: LoginResponse) {
    const { expiresIn, idToken, email, refreshToken, localId } = loginResponse;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = User.get({
      email,
      token: idToken,
      userId: localId,
      refreshToken,
      expirationDate,
    });

    return user;
  }

  static fromRefreshTokenResponse(
    refreshTokenResponse: RefreshTokenResponse,
    currentUser: User
  ) {
    const { id_token, refresh_token, expires_in } = refreshTokenResponse;
    const expirationDate = new Date(new Date().getTime() + expires_in * 1000);

    const user = User.get({
      ...currentUser,
      token: id_token,
      refreshToken: refresh_token,
      expirationDate,
    });

    return user;
  }
}
