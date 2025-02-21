```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
```