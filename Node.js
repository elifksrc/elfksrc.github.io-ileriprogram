const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
let highScore = 0; // Sunucuda saklanan yüksek skor

app.use(cors());
app.use(bodyParser.json());

// Yüksek skoru al
app.get('/highscore', (req, res) => {
    res.json({ highScore });
});

// Yüksek skoru güncelle
app.post('/highscore', (req, res) => {
    const { score } = req.body;
    if (score > highScore) {
        highScore = score;
    }
    res.json({ highScore });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
