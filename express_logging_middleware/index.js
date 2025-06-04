const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Custom Logging Middleware
const loggingMiddleware = (req, res, next) => {
  const start = Date.now();
  const timeStamp = new Date().toISOString();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${timeStamp}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });

  next();
};

// ✅ Use Middleware Globally
app.use(loggingMiddleware);

// ✅ Dummy Routes
app.get('/', (req, res) => {
  res.send('GET: Home Route');
});

app.post('/submit', (req, res) => {
  res.send('POST: Form Submitted');
});

// ✅ Server Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
