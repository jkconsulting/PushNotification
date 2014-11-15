var gcm = require('./lib/node-gcm');
var message = new gcm.Message();
console.log("message");

//API Server Key
var sender = new gcm.Sender('AIzaSyCz8HcfKiFKCUFqd_IOt9mPTG8TjX4U89Y');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bGV9aHTkXHtzMzDNdds7IopQeqYX5icOA0eXlUDldkFbmIoYv8p7q6Yz9GRaydPtRNH_7Fprb140YWQtgP_jnbOWhqXJ8tmr0mikeJOCvUxaqolz_96XHUzswa1myiLpbenGfsVicsaU5UCHEnC_5PQf');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});