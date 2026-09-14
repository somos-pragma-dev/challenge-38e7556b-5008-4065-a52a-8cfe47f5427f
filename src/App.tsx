import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import type { Task } from './types/Task';

interface AppState {
  isLoading: boolean;
  error: string | null;
  appVersion: string;
}

function App() {
  const [state, setState] = useState<AppState>({
    isLoading: true,
    error: null,
    appVersion: '1.0.0'
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        setState(prev => ({ ...prev, isLoading: false }));
      } catch (err) {
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: err instanceof Error ? err.message : 'Error desconocido al inicializar' 
        }));
      }
    };

    initializeApp();
  }, []);

  const handleError = (error: Error) => {
    console.error('Error en la aplicación:', error);
    setState(prev => ({ ...prev, error: error.message }));
  };

  const clearError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  if (state.isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando aplicación...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <span className="version-badge">v{state.appVersion}</span>
      </header>

      {state.error && (
        <div className="error-banner" role="alert">
          <p>{state.error}</p>
          <button onClick={clearError} aria-label="Cerrar error">
            ×
          </button>
        </div>
      )}

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2024 Task Tracker App - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;