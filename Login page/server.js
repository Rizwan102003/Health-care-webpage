const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const users = [];

app.get('/', (req, res) => {
    res.sendFile('Loginpage.html', { root: __dirname });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //user authentication logic
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful');
    } else {
        res.send('Login failed');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
