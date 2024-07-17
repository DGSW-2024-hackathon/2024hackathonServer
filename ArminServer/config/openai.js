const { Configuration, OpenAIApi } = require('openai');
const config = require('openai.json');


const openai = new OpenAIApi(configuration);

module.exports = openai;