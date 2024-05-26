const {WebhookResponse} = require('@jambonz/node-client');
const express = require('express');
const port = 3434;
const app = express();

app.use(express.json());

app.get('/irn', (req, res) => {
  const jambonz = new WebhookResponse();
  jambonz
    .pause({length: 1.5})
    .play({
      url: 'https://video.news.sky.com/snr/news/snrnews.mp3'
    });
  res.status(200).json(jambonz);
});

app.get('/phil', (req, res) => {
  const jambonz = new WebhookResponse();
  jambonz
    .pause({length: 1.5})
    .play({
      url: 'http://streaming.broadcastradio.com:8420/brorad'
    });
  res.status(200).json(jambonz);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});