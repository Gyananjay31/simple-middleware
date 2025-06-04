# Express Logging Middleware Project

## 📚 Overview

This project demonstrates how to build a **custom logging middleware** in an Express.js application. The middleware logs the HTTP method, requested URL, timestamp, response status code, and total time taken to process each request.

This is useful for:
- Monitoring incoming traffic
- Measuring performance
- Debugging and troubleshooting

---

## ✅ Features

- Logs **HTTP method**
- Logs **Requested URL**
- Logs **Timestamp** of request
- Logs **Response status code**
- Logs **Time taken to process the request** in milliseconds

---

## 🚀 How It Works

The custom middleware is placed globally in the Express app using:

```js
app.use(loggingMiddleware);
