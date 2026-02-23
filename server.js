const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname), { extensions: ['html'] }));
app.get('/calculators/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculators', 'index.html'));
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});
app.listen(5000, '0.0.0.0', () => {
  console.log('VitalHealth Hub running on port 5000');
});
