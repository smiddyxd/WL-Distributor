// var GoogleAuth; // Google Auth object.
// function initClient() {
//     gapi.client.init({
//         'apiKey': 'AIzaSyCcL4YVqsMHzcV29szskmNuC-D5G6jmeNQ',
//         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//         'clientId': '563856617839-v6p1m797ur3tmk3ua6gfs7k5phrptgqn.apps.googleusercontent.com',
//         'scope': 'profile',
//     }).then(function () {
//         GoogleAuth = gapi.auth2.getAuthInstance();

//         // Listen for sign-in state changes.
//         GoogleAuth.isSignedIn.listen(updateSigninStatus);
//         GoogleAuth.signIn();
//     });
// }

// var isAuthorized;
// var currentApiRequest;

// /**
//  * Store the request details. Then check to determine whether the user
//  * has authorized the application.
//  *   - If the user has granted access, make the API request.
//  *   - If the user has not granted access, initiate the sign-in flow.
//  */
// function sendAuthorizedApiRequest(requestDetails) {
//     currentApiRequest = requestDetails;
//     if (isAuthorized) {
//         // Make API request
//         // gapi.client.request(requestDetails)

//         // Reset currentApiRequest variable.
//         currentApiRequest = {};
//     } else {
//         GoogleAuth.signIn();
//     }
// }

// /**
//  * Listener called when user completes auth flow. If the currentApiRequest
//  * variable is set, then the user was prompted to authorize the application
//  * before the request executed. In that case, proceed with that API request.
//  */
// function updateSigninStatus(isSignedIn) {
//     if (isSignedIn) {
//         isAuthorized = true;
//         if (currentApiRequest) {
//             sendAuthorizedApiRequest(currentApiRequest);
//         }
//     } else {
//         isAuthorized = false;
//     }
// }

// function start() {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//         'apiKey': 'AIzaSyCcL4YVqsMHzcV29szskmNuC-D5G6jmeNQ',
//         // Your API key will be automatically added to the Discovery Document URLs.
//         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//         // clientId and scope are optional if auth is not required.
//         'clientId': '563856617839-v6p1m797ur3tmk3ua6gfs7k5phrptgqn.apps.googleusercontent.com',
//         'scope': 'profile',
//     }).then(function () {
//         // 3. Initialize and make the API request.
//         return gapi.client.people.people.get({
//             'resourceName': 'people/me',
//             'requestMask.includeField': 'person.names'
//         });
//     }).then(function (response) {
//         console.log(response.result);
//     }, function (reason) {
//         console.log('Error: ' + reason.result.error.message);
//     });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);

const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, () => console.log('Gator app listening on port 8000!'));
