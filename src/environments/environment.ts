// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://rcardozo-portfolio-backend.herokuapp.com/',
  authUrl: 'https://rcardozo-portfolio-backend.herokuapp.com/auth/',
  firebaseConfig: {
    apiKey: "AIzaSyCuCxmdIkfKcY50-fveQz_BpPgxMGE2c3k",
    authDomain: "portfolio-rcardozo.firebaseapp.com",
    projectId: "portfolio-rcardozo",
    storageBucket: "portfolio-rcardozo.appspot.com",
    messagingSenderId: "525328791601",
    appId: "1:525328791601:web:0ba5cef52769ddcee03d10"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
