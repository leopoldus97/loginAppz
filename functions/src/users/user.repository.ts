import {User} from '../../../src/app/shared/models/user';

export interface UserRepository {
  deleteUserFromUsers(uid: string): Promise<any>;

  deleteUserFromBlocked(uid: string): Promise<any>;

  deleteUserFromAuth(uid: string): Promise<any>;

  timeStamp(uid: string): Promise<any>;

  createUserInUsers(user: User): Promise<any>;

  createUserInBlocked(user: User): Promise<any>;
}
