To fix this, ensure `MyComponent` is nested inside a `<Route>` component:

```javascript
import { useParams, Routes, Route } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}>
      </Route>
    </Routes>
  );
}
```

Now, the `useParams` hook will correctly access the `id` parameter from the URL.  Make sure your routes are properly defined and that the component using `useParams` is a direct child of the route element.