// api 키가 없어서 (결제 때문에) 못만들었습니다.
// 작동하는지 테스트도 못해봤어여...

const express = require('express');
const OpenAI = require('openai');

const router = express.Router();




router.get('/', async(req, res)=>{
    
  const userPrompt = req.body.userPrompt;
  console.log(userPrompt)

  const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages : [{"role" : "user", 
        "message": userPrompt}],
        max_tokens: 100

    });
    console.log(response.choices[0].message.content);
    res.send(response.choices[0].message.content);
});


module.exports = router;