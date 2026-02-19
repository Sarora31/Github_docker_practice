const  express = require('express')
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (re,res) => {
    return res.json ( { message: "Hey, ia m nodejs inside a  container"});
});

app.listen(PORT, () => console.log('server started on PORT:${PORT}'))

