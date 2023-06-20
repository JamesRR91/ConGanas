const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  const port = 3000; // Or any other port number you prefer

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
