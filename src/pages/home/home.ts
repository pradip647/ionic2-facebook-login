import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  facebookLogin(){
      Facebook.login(['email']).then( (response) => {
        alert(response);
        console.log(response);
        let facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
              alert(facebookCredential);
              console.log(facebookCredential);
            firebase.auth().signInWithCredential(facebookCredential)
            .then((success) => {
                alert(success);
                console.log(success);
            })
            .catch((error) => {
                alert("Firebase failure: " + JSON.stringify(error));
                console.log(error);
            });

      }).catch((error) => { alert(error) });   
  }

}
