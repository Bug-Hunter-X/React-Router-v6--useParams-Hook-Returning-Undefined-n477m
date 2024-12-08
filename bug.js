In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered by a route.  This leads to `undefined` values for route parameters.  For example:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // ...
}

function App() {
  return (
    <div>
      <MyComponent />
      {/* useParams hook will not work here because MyComponent isn't nested under a Route */}
    </div>
  );
}
```

The `useParams` hook only works within components rendered as part of a route definition using `<Route path="..." element={<MyComponent />} />`. 