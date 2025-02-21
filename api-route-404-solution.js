```javascript
// app/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
```

The solution is to move the API route from `pages/api/hello.js` to `app/api/hello.js`. The App Router uses the `app` directory for all routes, including API routes.