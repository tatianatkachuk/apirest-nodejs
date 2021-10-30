const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const{logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
//app.use(cors()); //cualquier dominio

const whitelist = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null,true)
    }else{
      callback(new Error('Not permitted'))
    }
  }
}
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('Server on port ' + port)
})

routerApi(app);

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
