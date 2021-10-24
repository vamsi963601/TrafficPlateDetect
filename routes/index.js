var express = require("express");


var router = express.Router();
module.exports = router;
var textAWS = require("./../text-detection");


   
router.post('/detect-text', function(req, res){
    
  
    const obj = {
        photo: req.body.photo
    }
    
   
    textAWS.detect_text(obj, function(data){
        
        if(data.found) res.send(data);
        else res.send(data);
        
    });
   
});