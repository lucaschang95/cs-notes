# error-boundary

**当一个类组件声明了`static getDerivedStateFromError()`或`componentDidCatch()`后, 该组件变为error boundary**

- error-boundaries **do not** catch errors inside event handlers





- **`static getDerivedStateFromError(error)`**
  - 返回一个fallback UI
- **`componentDidCatch(error, errorInfo)`**
  - log error information