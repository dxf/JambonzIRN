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
      url: 'https://streaming.broadcastradio.com:8420/brorad'
    });
  res.status(200).json(jambonz);
});

app.get('/stairway', (req, res) => {
  const jambonz = new WebhookResponse();
  jambonz
    .pause({length: 0.1})
    .play({
      url: 'https://wish2.soundsip.com/sugarstream/vako/files/Mp3%20Songs/English%20MP3%20Songs/Requested%20English%20Songs/Led%20Zepplin%20-%20Stairway%20to%20Heaven.mp3'
    });
  res.status(200).json(jambonz);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});