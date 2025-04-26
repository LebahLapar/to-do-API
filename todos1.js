const express = require('express');
const app = express();

app.use(express.json());

let Db = []

app.get('/', (req,res) => {
    res.send("test");
});

app.post('/todos1', (req,res) => {
    const tambah = req.body;
    const nemu = Db.find(t => t.id === tambah.id)

    if (nemu) {
       return res.status(404).json({"status":"maaf data yang ingin anda tambahkan sudah ada yang pakai"});
        
    }
    
    Db.push(tambah);

    res.status(201).json({"berhasil" : "data berhasil ditambahkan"});
});

app.get('/todos1', (req,res) => {
    res.send(Db);
});

app.get('/todos1/lihatDb/:id', (req,res) => {
    const lihat = req.params.id;
    const nemu = Db.find(t => t.id === lihat);
    if (!nemu) {
        res.json({"pesan" : "tidak ada data",
            "status" : "uknown",

        })
    }

    res.send(nemu)
})

app.listen(3000, () => {
    console.log("server jalan le")
})