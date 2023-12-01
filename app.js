const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple node js project deployed on AWS EC2 instance');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
