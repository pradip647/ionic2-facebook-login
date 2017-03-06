# ionic2-native-facebook-login
A simple app to show how to use native Facebook sign-in in Ionic 2.

## Working Code
To run the above tested and ready code please clone the repository and use the following commands in your project root folder.

```
Clone this repo
open this repo using CD from your terminal
npm install 
ionic platform add android (or ios)
ionic build android (or ios)
ionic run android (or ios)
```

## Step by Step Working Example
 create the new Ionic 2 app ( ionic start creates the app )

## Install Firebase
npm install firebase --save
add firebase to your web app

## Create a Facebook App
```
The first thing you’ll need is to register for a Facebook application, you can go to https://developers.facebook.com/apps and click on the shiny green button that says Create a New App
You’ll be greeted by a pop-up asking you which kind of app you want to create
You can either choose www or tell it to skip and use basic setup, remember, we just need the ID for the plug-in.
After that, you’ll get to name your app and generate an ID
```
## Get the Facebook Plugin
```
Now we need to get the plugin, detailed instructions are in the [ionic-native docs] (http://ionicframework.com/docs/v2/native/facebook/)
But basically you’re going to open your terminal  and type
ionic plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
Where APP_ID is the id for the app we just created in the Facebook developers page, and APP_NAME is its name.

Now we need to go back to the Facebook developer page to add both platforms, iOS and Android, but first, they’re going to ask us for some info, let’s get it now.
Go to your app’s config.xml file and look for this line of code:
<widget id="com.ionicframework.fbauth285351" version="0.0.1" 
xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

## Add the Platforms
Now go back to your app’s dashboard on Facebook and click under settings you’ll see an option that says, add platform.
### for ios
Just copy that id from your config.xml into the Bundled ID
### for android
copy that id from your config.xml into the Googleplay package name
put android hash key into Key Hashes field

### Enable Firebase
go to your firebase app
go to authentication tab
enable facebook from SIGN-IN METHOD
paste your Facebook App Id and App Secret from your [facebook developer page](https://developer.facebook.com)
Copy OAuth redirect Url and put it [Facebok login setting](https://developer.facebook.com)

### Create hash key for android
download openssl
paste openssl in your installation drive (for example c:/)
open cmd or terminal
copy and paste this code : 
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

## Usage

### home html
```
<button (click)="facebookLogin()">Click for Facebook Login</button>
```

### home component
```
import { Facebook } from 'ionic-native';
import * as firebase from 'firebase';


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
```

### app module
```
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyD8SYwKQ5pmvA2KrWupSeLJglF1FEHg5ho",
    authDomain: "ionic2facebooklogin.firebaseapp.com",
    databaseURL: "https://ionic2facebooklogin.firebaseio.com",
    storageBucket: "ionic2facebooklogin.appspot.com",
    messagingSenderId: "175096937966"
  };
  firebase.initializeApp(config);
```
### Resources

* Ionic 2 - http://www.ionicframework.com

* Angular 2 - https://www.angular.io

* Ionic2 Native - https://ionicframework.com/docs/v2/native/

* firebase console - https://console.firebase.google.com



