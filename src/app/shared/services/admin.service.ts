import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {first, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.admin = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>('users/' + user.uid).valueChanges();
          } else {
            router.navigateByUrl('');
            return of(null);
          }
        }));
  }

  getUsers(): Observable<User[]> {
    return this.afs.collection<User>('users', ref => ref.where("role","==","user")).valueChanges().pipe(first());
  }
  changeRole(user: User) {
    const userRef = this.afs.doc('users' + user.uid);
    userRef.set(user);
  }
}
