import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { User, Promise } from 'firebase/app';
import * as firebase from 'firebase/app';
import { UserModel } from '../models/user-model';

@Injectable()
export class AuthService {
    user: firebase.User;

    constructor(public angularFireAuth: AngularFireAuth) {
        angularFireAuth.authState.subscribe((user: User) => {
            this.user = user;
        });
    }

    get authenticated(): boolean {
        return this.user != null;
    }

    signInWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
    }

    createUserWithEmailAndPassword(userModel: UserModel): Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    }

    signInWithFacebook(accessToken: string): firebase.Promise<any> {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(accessToken);
        return this.angularFireAuth.auth.signInWithCredential(facebookCredential);
    }

    signInWithPopup(): firebase.Promise<any> {
        return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    signOut(): Promise<any> {
        return this.angularFireAuth.auth.signOut();
    }
    
}