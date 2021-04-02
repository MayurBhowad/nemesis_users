const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}


app.listen(PORT, () => console.log(`Server up and Running..`))