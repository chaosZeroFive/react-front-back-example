const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json({ extended: false }));

app.listen(PORT, () =>
  console.log(`Express Server is running at http://localhost:${PORT}`)
);
