//----- Express import
const express = require('express');
const app = express();


//------ Multer import
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//----- get route
app.get('/', (req, res) => {
    res.send('');
}); 

//------ post route -------   w/upload.single middleware
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
});

const port = process.env.PORT || 3000;

//. -- port test
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
