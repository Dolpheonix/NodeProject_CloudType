const express = require('express');
const cookieparser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieparser());

app.get('/', (req, res) => {
    const msg = {
        message: 'hello myapp',
        index: 0
    };
    res.send(JSON.stringify(msg));
});

app.listen(3000, "0.0.0.0", ()=> {
    console.log("Connected");
});
