const express = require('express');
const connectDB = require('./config/connection'); 
const routes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware for JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import and use route files

const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');
// const friendRoutes = require('./routes/friendRoutes');
// Use the routes

app.use(routes);
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
// app.use('/api/friends', friendRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});