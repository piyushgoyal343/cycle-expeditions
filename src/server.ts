import express from 'express';
import path from 'path';
import { expeditions } from './data/expeditions';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON parser
app.use(express.json());

// Serve static assets from public folder
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to fetch all expeditions
app.get('/api/expeditions', (req, res) => {
  res.json(expeditions);
});

// For any other route, serve the index.html page (Single Page Application style)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚴 Cycle Expeditions Server is running!`);
  console.log(`🔗 Local URL: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
