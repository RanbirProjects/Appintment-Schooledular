const mongoose = require('mongoose');
const User = require('./models/userModel');

const checkUser = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/appointment-scheduler');
    const user = await User.findOne({ email: 'ranbirsingh9156@gmail.com' });
    if (user) {
      console.log('User found:', {
        name: user.name,
        email: user.email,
        id: user._id
      });
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
};

checkUser(); 