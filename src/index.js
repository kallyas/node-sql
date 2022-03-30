const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use('/api/v1', require('./routes/index'))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
