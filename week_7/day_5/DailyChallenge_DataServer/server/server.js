import e from "express";
import cors from 'cors'

const app = e()

app.use(cors())
app.use(e.json())

app.get('/api/hello', (_req,res)=>{
    res.send("Hello From Express")
})

app.post('/api/world', (req,res)=>{
    console.log(res.body);
    res.send(`I received your POST request. This is what you sent me: ${req.body.value}`)
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  })