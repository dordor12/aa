const express = require('express');
const app = express ();
app.all('*',(req,res)=> {
console.log(req);
});
app.listen(80, () => console.log('start'));
