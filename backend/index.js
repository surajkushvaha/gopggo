const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000; // You can change the port as needed.

// Define the path to your public folder
const publicPath = path.join(__dirname, 'public');

// Serve static files from the public folder
app.use(express.static(publicPath));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
