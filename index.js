const express = require('express');
const fs = require('fs');
const app = express ();
app.all('*',(req,res)=> {
console.log(req);
var s = fs.createReadStream('./gif.gif');
    s.on('open', function () {
        res.setHeader('Content-Type', 'image/gif');
        s.pipe(res);
    });
});
app.listen(8080, () => console.log('start'));