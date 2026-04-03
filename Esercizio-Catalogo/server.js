const express = require('express');
const app = express();
const products = require('./products.json');

app.get('/products', (req, res) => {
    const { nome, marchio, categoria } = req.query;
    let risultati = products;
    if (nome) {
        risultati = risultati.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()));
    }
    if (marchio) {
        risultati = risultati.filter(p => p.marchio.toLowerCase().includes(marchio.toLowerCase()));
    }
    if (categoria) {
        risultati = risultati.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
    }
    if (risultati.length == 0) {
        return res.status(404).json({ error: 'Nessun prodotto trovato' });
    }
    res.json(risultati);
});


app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000'
        );
});