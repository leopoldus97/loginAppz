import * as admin from 'firebase-admin';
import {User} from '../../../src/app/shared/models/user';
import {UserRepository} from './user.repository';
import {map, tap} from 'rxjs/operators';

export class UserRepositoryFirebase implements UserRepository{

  usersPath = 'users/';
  blockedUsersPath = 'blocked/';

  deleteUserFromUsers(uid: string): Promise<any> {
    return this.db().doc(`${this.usersPath}/${uid}`).delete();
  }

  deleteUserFromBlocked(uid: string): Promise<any> {
    return this.db().doc(`${this.blockedUsersPath}/${uid}`).delete();
  }

  deleteUserFromAuth(uid: string): Promise<any> {
    return admin.auth().deleteUser(uid);
  }

  timeStamp(uid: string): Promise<any> {
    return this.db().doc(`${this.usersPath}/${uid}`).update({
      date: new Date().toLocaleString('dk-DK')
    });
  }

  createUserInUsers(user: User): Promise<any> {
    return this.db().doc(`${this.usersPath}/${user.uid}`).create(user);
  }

  createUserInBlocked(user: User): Promise<any> {
    return this.db().doc(`${this.blockedUsersPath}/${user.uid}`).create(user);
  }

  changeUserAccess(uid: string): Promise<any> {
    let isDisabled: boolean = false;
      admin.auth().getUser(uid).then(user => isDisabled = user.disabled);
    if (isDisabled) {
      return admin.auth().updateUser(uid, {disabled: false});
    }
    else {
      return admin.auth().updateUser(uid, {disabled: true});
    }
  }

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }
}
