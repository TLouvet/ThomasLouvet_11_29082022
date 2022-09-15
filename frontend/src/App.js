import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/12/dashboard' replace />} />
      <Route path='/:id/dashboard/*' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
