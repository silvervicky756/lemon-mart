// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCJMFtI-n3uqm4UmBDhzMMftb1I3RE1VMU',
    authDomain: 'silvermart-d47cc.firebaseapp.com',
    databaseURL: 'https://silvermart-d47cc.firebaseio.com',
    projectId: 'silvermart-d47cc',
    storageBucket: 'silvermart-d47cc.appspot.com',
    messagingSenderId: '528470796843',
    appId: '1:528470796843:web:49a69faf4f56e10ad4986e',
    measurementId: 'G-RMLFLNXEBN',
  },
  authMode: AuthMode.InMemory,
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
