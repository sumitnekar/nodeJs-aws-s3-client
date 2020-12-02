var AWS = require('aws-sdk');
var uuid = require('uuid');


console.log("S3 bucket client")

AWS.config.getCredentials(function(err) {
    if (err) 
    console.log("Please configure aws credentials");
    // credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
  });