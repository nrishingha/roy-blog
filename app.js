const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.send('<h1>Express Server up and Running</h1>');
});
app.listen(8000);
