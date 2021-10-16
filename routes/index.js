var express = require("express");


var router = express.Router();
module.exports = router;
var textAWS = require("./../text-detection");


/* Method - Detect face of users by photo.
   Recive - Photo in format base 64.
   Return - Return result of reconize.
*/   
router.post('/detect-text', function(req, res){
    
    //recive param photo in base64.
    const obj = {
        photo: req.body.photo
    }
    
    //calling method API AWS to recoknition face.
    textAWS.detect_text(obj, function(data){
        
        if(data.found) res.send(data);
        else res.send(data);
        
    });
   
});