import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {User} from '../../src/app/shared/models/user';

admin.initializeApp();

exports.myFunction = functions.firestore
  .document('users/{userID}')
  .onCreate((snap, context) => {
    const db = admin.firestore();
    return db.doc('users/' + context.params.userID).update({
      date: new Date().toLocaleString('dk-DK')
    });
  });

exports.deleteUser = functions.auth
  .user()
  .onDelete((userData, context) => {
    const db = admin.firestore();
    const uid = userData.uid;
    return db.doc('users/' + uid).delete();
});

exports.blockUser = functions.firestore
  .document('users/{userID}')
  .onUpdate((change, context) => {
    const userValue = change.after.data() as User;
    const userID = context.params.userID;
    const db = admin.firestore();
    if (userValue.blocked === true) {
      return admin.auth().updateUser(userID, {disabled: true}).then(() => {
        return db.doc('blocked/' + userID).create(userValue).then(() => {
          return db.doc('users/' + userID).delete();
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
      return admin.auth().updateUser(userID, {disabled: false}).then(() => {
        return db.doc('users/' + userID).create(userValue).then(() => {
          return db.doc('blocked/' + userID).delete();
        });
      }).catch(error => console.log('error', error));
    } else {
      return;
    }
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
