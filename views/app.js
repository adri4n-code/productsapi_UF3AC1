const express = require('express')
const slugify = require('slugify');
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
// app.listen(5000, () => {
//     console.log('server is listening on port 5000')
// })


app.listen(port, () => {
    
    let bienvenida = 'server is listening on port 5000';
    bienvenida = bienvenida .replace(/ +/g, '*');
    let slugifiedMessage = slugify(bienvenida, { replacement: '*', lower: true });
    console.log(bienvenida);
});

zº

