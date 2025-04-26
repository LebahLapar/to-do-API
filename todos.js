const express = require('express');
const app = express();

app.use(express.json());


const todos = [{ ido: 'satu', titlo: 'Belajar Express', completed: false },
    { ido: 'dua', titlo: 'Makan', completed: true }];

app.get('/', (req,res) => {
    res.send('Halo');
});

app.post('/todos', (req,res) => {
    const todoBaru = req.body;
    todos.push(todoBaru);
    res.status(201).json({'benar ' : 'data berhasil ditambahkan!'
    });

})

app.get('/todos', (req,res) => {
    res.json(todos)
})

app.get('/todos/:id', (req,res) => {
    const id = req.params.id;
    const todo = todos.find(t => t.ido === id);

    if (!todo) {
        return res.status(404).json({messege : "tidak ditemukan data"});
    }

    res.json(todo);
})

app.delete('/todos/hapus/:id', (req,res) => {
    const hapus = req.params.id;
    const FixHapus = todos.findIndex(t => t.ido === hapus);

    if (FixHapus == -1) {
        return res.status(404).json({messege : "takde data"});

    }

    const HapusArr = todos.splice(FixHapus, 1);
    res.json({
        'status' : 'data berhasil dihapus!!',
        'data' : HapusArr[0]
    }
    );
});

app.listen(3000, () => {
    console.log("telah jalan")
});