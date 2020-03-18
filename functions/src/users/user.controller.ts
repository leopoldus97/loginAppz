import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {Change, EventContext} from 'firebase-functions';
import {UserRecord} from 'firebase-functions/lib/providers/auth';

export interface UserController {
  setCreationDate(snap: DocumentSnapshot, context: EventContext): Promise<void>;
  deleteUserFromAuth(userData: UserRecord, context: EventContext): Promise<void>;
  deleteUserFromFirestoreUsers(snap: DocumentSnapshot, context: EventContext): Promise<void>;
  deleteUserFromFirestoreBlocked(snap: DocumentSnapshot, context: EventContext): Promise<void>;
  changeUserAccess(change: Change<DocumentSnapshot>, context: EventContext): Promise<void>;
}
