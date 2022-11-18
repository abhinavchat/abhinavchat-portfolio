import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);