const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    const message = req.body;
    
    if(message == null){
        return 0;
    }

    else {
        
        res.json({msg:'post ok'});
    }
    
});

module.exports = router;