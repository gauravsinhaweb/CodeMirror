const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api', require("./routes/api"));

const PORT = process.env.PORT || 3001;

app.listen(3001, () => console.log(`Server on port ${PORT}`));