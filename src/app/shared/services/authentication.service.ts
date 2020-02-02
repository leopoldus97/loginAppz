import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

    this.currentUser = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>('users/' + user.uid).valueChanges();
          } else {
            return of(null);
          }
        }));
  }

  async login(email: string, pw: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, pw).then(result => {
      if (result.user.emailVerified) {
        this.router.navigate(['/account']);
      } else {
        this.signOut();
        this.router.navigate(['/login']);
      }
    });
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    await this.router.navigate(['/account']);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({ uid, email, firstName, lastName, displayName, role }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/' + uid);

    const data: User = {
      uid,
      email,
      firstName,
      lastName,
      displayName,
      role
    };

    return userRef.set(data, { merge: true });
  }

  public createUser(user: User, pw: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, pw)
      .then(result => {
        user.uid = result.user.uid;
        user.role = 'user';
        const users = this.afs.collection<User>('users').doc(result.user.uid);
        users.set(user).catch(error => console.log(error));
        result.user.sendEmailVerification().then(() => this.router.navigateByUrl('/login')).catch(error => console.log(error));
      }).catch(error => console.log(error));
  }

  public resetPassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email).catch(error => console.log(error));
  }
}
