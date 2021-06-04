const routeslogger_middleware = options => {
    var countroutexecuted = 0;
    return function timeLog(req, res, next) {
      countroutexecuted ++;
      console.log('\n',countroutexecuted,'Route called\nURL         :' ,req.path);
      console.log('Date and Hour :' , Date());
      next();
    }
}
module.exports = routeslogger_middleware;