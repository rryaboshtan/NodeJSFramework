const userRouter = require('./src/user-router');
const parseUrl = require('./framework/parseUrl');
const Application = require('./framework/Application');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const jsonParser = require('./framework/parseJson');

const app = new Application();
app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);

const start = async () => {
   try {
      await mongoose.connect(
         'mongodb+srv://Roman:jjAAFPnZ46bgbbN@cluster0.w21j6.mongodb.net/Cluster0?retryWrites=true&w=majority'
      );
      app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
   } catch (error) {
      console.log(error.message);
   }
};

start();
