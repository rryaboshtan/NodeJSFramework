const http = require('http');
const EventEmitter = require('events');

class Application {
   constructor() {
      this.emitter = new EventEmitter();
      this.server = this.#createServer();
      this.middlewares = [];
   }

   use(middleware) {
      this.middlewares.push(middleware);
   }
   //    endpoint = {
   //       '/users': {
   //          GET: handler,
   //       },
   //    };
   listen(port, callback) {
      this.server.listen(port, callback);
   }

   addRouter(router) {
      Object.keys(router.endpoints).forEach(path => {
         const endpoint = router.endpoints[path];
         Object.keys(endpoint).forEach(method => {
            const handler = endpoint[method];
            this.emitter.on(this.#getRouteMask(path, method), (req, res) => {
               //  console.log('Router = ', router.endpoints['/users'].GET(req, res));
               //  router.endpoints['/posts'].GET(req, res);
               // this.middlewares.forEach(middleware => middleware(req, res));
               handler(req, res);
            });
         });
      });
      //   console.log('Router = ', router.endpoints['/users'].GET(req, res));
   }

   #createServer = () => {
      return http.createServer((req, res) => {
         // const emitted = this.emitter.emit(this.#getRouteMask(req.url, req.method), req, res);
         //   console.log(this.emitter.listeners('[/posts]:[POST]'));
         let body = '';
         req.on('data', chunk => {
            // console.log(chunk);
            body += chunk;
         });

         req.on('end', () => {
            if (body) {
               req.body = JSON.parse(body);
            }
            this.middlewares.forEach(middleware => middleware(req, res));
            // console.log(req.pathname);
            const emitted = this.emitter.emit(this.#getRouteMask(req.pathname, req.method), req, res);
            if (!emitted) {
               res.end();
            }
         });
      });
   };

   #getRouteMask = (path, method) => {
      console.log(`[${path}]:[${method}]`);
      return `[${path}]:[${method}]`;
   };
}

module.exports = Application;
