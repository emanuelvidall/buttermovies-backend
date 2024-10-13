export interface AuthResponse {
  accessToken: string;
  user: {
    id: number;
    username: string;
    role: string;
  };
}
