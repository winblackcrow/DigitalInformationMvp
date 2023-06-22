const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', function (req, res)  {

    res.send([

    ]);
})

app.listen(port, () => {console.log(`Listen on port ${port}`)});