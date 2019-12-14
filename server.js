const express = require('express')
const app = express();
//app.listen(3000, () => console.log("kuuntelen"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("kuuntelen porttia " + port));

app.use(express.static("public"));
