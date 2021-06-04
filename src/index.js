const express = require('express');
const app = express();
const routeslogger_middleware = require('./middlewares/index')
//configs
app.set('port', process.env.port || 5000);
app.use(routeslogger_middleware());

//Configuramos as rotas
const Routes = require('./routes');
Routes(app);

//server listen on port 5000 or other defined at 'process.env.port'
app.listen(app.get('port'), () => {
 console.log('Server started at port: '+ app.get('port'));
});
