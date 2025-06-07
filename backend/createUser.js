const mongoose = require('mongoose');
const User = require('./models/userModel');

const createUser = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/appointment-scheduler');
    
    const user = await User.create({
      name: 'Ranbir',
      email: 'ranbirsingh9156@gmail.com',
      password: 'Ranbir$456@'
    });
    
    console.log('User created successfully:', {
      name: user.name,
      email: user.email,
      id: user._id
    });
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
  }
};

createUser(); 