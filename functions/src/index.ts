import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {User} from '../../src/app/shared/models/user';

admin.initializeApp();

/*
exports.setCreationDate = functions.firestore
  .document('users/{userID}')
  .onCreate((snap, context) => {
    const db = admin.firestore();
    return db.doc('users/' + context.params.userID).update({
      date: new Date().toLocaleString('dk-DK')
    });
  });
 */

exports.deleteUserFromAuth = functions.auth
  .user()
  .onDelete((userData, context) => {
    const db = admin.firestore();
    const uid = userData.uid;
    return db.doc('users/' + uid).delete();
  });

exports.deleteUserFromFirestoreUsers = functions.firestore
  .document('users/{userID}')
  .onDelete((snap, context) => {
    return admin.auth().deleteUser(context.params.userID);
  });

exports.deleteUserFromFirestoreBlocked = functions.firestore
  .document('blocked/{userID}')
  .onDelete((snap, context) => {
    return admin.auth().deleteUser(context.params.userID);
  });

exports.blockUser = functions.firestore
  .document('users/{userID}')
  .onUpdate((change, context) => {
    const userValue = change.after.data() as User;
    const userID = context.params.userID;
    const db = admin.firestore();
    if (userValue.blocked === true) {
      return db.doc('blocked/' + userID).create(userValue).then(() => {
        return db.doc('users/' + userID).delete().then(() => {
          return admin.auth().updateUser(userID, {disabled: true});
        });
      });
    } else {
      return;
    }
  });

exports.enableUser = functions.firestore
  .document('blocked/{userID}')
  .onUpdate((change, context) => {
    const userValue = change.after.data() as User;
    const userID = context.params.userID;
    const db = admin.firestore();
    if (userValue.blocked === false) {
      return db.doc('users/' + userID).create(userValue).then(() => {
        return db.doc('blocked/' + userID).delete().then(() => {
          return admin.auth().updateUser(userID, {disabled: false});
        });
      });
    } else {
      return;
    }
  });
