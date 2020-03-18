import {UserRepository} from './user.repository';

export class UserService {
  constructor(private userRepo: UserRepository) {}

  setCreationDate(uid: string): Promise<any> {
    return this.userRepo.timeStamp(uid);
  }

  deleteUserFromDatabase(uid: string, isBlocked: boolean): Promise<any> {
    if (!isBlocked) {
      return this.userRepo.deleteUserFromUsers(uid);
    }
    else {
      return this.userRepo.deleteUserFromBlocked(uid);
    }
  }

  deleteUserFromAuth(uid: string): Promise<any> {
    return this.userRepo.deleteUserFromAuth(uid);
  }
}
