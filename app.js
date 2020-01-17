const express = require('express');
const PORT = process.env.PORT || 8080;

let app = express();

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});

app.get('/', (req, res, next)=>{
    res.send('Hello World 2');
    //res.write
});

app.use((req, res, next)=>{
    res.status(404);
    res.send(`
    page not found`);
});
//app.post()

app.listen(PORT);