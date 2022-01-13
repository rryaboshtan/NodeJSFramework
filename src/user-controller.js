const User = require('./user-model');

const getUsers = async (req, res) => {
 
   console.log(req.params);
   let users;
   if (req.params.id) {
      // return res.send(users.find(user => user.id === parseInt(req.params.id)));
      const user = await User.findById(req.params.id);
      res.send([user]);
   } else {
      users = await User.find();
      res.send(users);
   }
};

const createUser = async (req, res) => {
   const user = await User.create(req.body);
   res.send(user);
};

module.exports = {
   getUsers,
   createUser,
};
