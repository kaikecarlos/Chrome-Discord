const port = 3000;




const express = require('express');
const app = express();


const client = require('discord-rich-presence')('435082014065164298');


app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/", (request, response) => {
    let body = request.body;
    let presence = {
      state: body.state.substring(0, 128),
      details: body.details.substring(0, 128),
      largeImageKey: 'chrome',
      largeImageText: 'Chrome ',
      instance: true
    }

    client.updatePresence(presence);
    response.sendStatus(200);
    
});

app.listen(port, () => console.log(`Web server started! (${port})`));
