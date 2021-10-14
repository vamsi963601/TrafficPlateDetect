const config = require('./../config/aws-config');

var AWS = require('aws-sdk');
AWS.config.region = config.region;

var uuid = require('node-uuid');
var fs = require('fs-extra');
var path = require('path');

var rekognition = new AWS.Rekognition({region: config.region});

//set defaut obj to return results data
var objReturn = {
	found: false,
	resultAWS:''
}


var params = {
    Image: { /* required */
      Bytes: Buffer.from(obj.photo, 'base64'),
      
    },
    Filters: {
      RegionsOfInterest: [
        {
        //   BoundingBox: {
        //     Height: 'NUMBER_VALUE',
        //     Left: 'NUMBER_VALUE',
        //     Top: 'NUMBER_VALUE',
        //     Width: 'NUMBER_VALUE'
        //   }
        },
        /* more items */
      ],
      WordFilter: {
        // MinBoundingBoxHeight: 'NUMBER_VALUE',
        // MinBoundingBoxWidth: 'NUMBER_VALUE',
        MinConfidence: '30'
      }
    }
  };
  rekognition.detectText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });