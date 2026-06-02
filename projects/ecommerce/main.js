const express = require('express');
const app = express();
const port = 3000;
const path=require('path')
const mongoose = require('mongoose');

// const student = require("./models/student");
// ready to go!

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
}
main().catch(err => console.log(err));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const Product=require('./models/product')
app.get('/', function (req, resp) {
    resp.render('front')
})

function randomname(){
    const arr=["mouse","keyboard","monitor","headphone","webcam","speaker","microphone","laptop","tablet","phone"]
    return arr[Math.floor(Math.random()*arr.length)]
}
function randomcategory(){
    const arr=["electronics","clothing","books","home","kitchen","sports","toys"]
    return arr[Math.floor(Math.random()*arr.length)]
}
function randomprice(){
    return Math.floor(Math.random()*4500 + 500)
}
function randominstock(){
    return Math.random()<0.5
}
app.get('/generate-products', async(req, res) => {
    await Product.deleteMany({})
    for(let i=0;i<10;i++){
        await Product.create({
            name:randomname(),
            price:randomprice(),
            category:randomcategory(),
            instock:randominstock()
        })
    }
    res.send('product created');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});