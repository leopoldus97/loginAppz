import {UserController} from './user.controller';
import {Change, EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {UserRecord} from 'firebase-functions/lib/providers/auth';

export class UserControllerFirebase implements UserController{
  changeUserAccess(change: Change<DocumentSnapshot>, context: EventContext): Promise<void> {
    return undefined;
  }

  deleteUserFromAuth(userData: UserRecord, context: EventContext): Promise<void> {
    return undefined;
  }

  deleteUserFromFirestoreBlocked(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    return undefined;
  }

  deleteUserFromFirestoreUsers(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    return undefined;
  }

  setCreationDate(snap: DocumentSnapshot, context: EventContext): Promise<void> {
    return undefined;
  }

}
