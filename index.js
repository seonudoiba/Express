import express from 'express';


const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('<h2>Hello Express</h2>')
})

app.listen(PORT, ()=>console.log('listening on port '+ PORT))