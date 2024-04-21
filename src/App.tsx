import Dashboard from './pages/Dashboard';


import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ProtectedRoute path="/dashboard" element={<Dashboard />} />
  );
}

export default App;




