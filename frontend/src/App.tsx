import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './routes/Public/PublicRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
