const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const correctPassword = 'abdelkader2024'; // Mot de passe correct

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === correctPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
