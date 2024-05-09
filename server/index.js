import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers/user.route.js';

const app = express();


app.use(cors())
app.use(express.json())

try {
  await mongoose.connect('mongodb+srv://ansari:alfahad@forgd.s02hfp5.mongodb.net/ForgdData');
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}


app.get('/',(req,res)=>{
  res.send('hii i am home page')
})

// Define router
app.use('/user', router);


app.listen(2000, () => {
  console.log('Server is running on port 2000');
});