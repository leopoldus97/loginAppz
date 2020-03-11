export interface User {
  uid: string;
  email: string;
  displayName: string;
  role?: string;
  firstName?: string;
  lastName?: string;
  blocked?: boolean;
}
