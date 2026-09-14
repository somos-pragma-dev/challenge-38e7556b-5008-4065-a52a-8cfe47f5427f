import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, ReactNode } from 'react';
import Home from '@pages/Home';

const CreateTask = lazy(() => import('@pages/CreateTask'));

const LoadingFallback = () => (
  <div className="loading-container" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div className="spinner" style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <p>Cargando...</p>
  </div>
);

const NotFound = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <h1 style={{ fontSize: '4rem', margin: 0, color: '#e74c3c' }}>404</h1>
    <h2 style={{ marginTop: '0.5rem' }}>Página no encontrada</h2>
    <p style={{ color: '#666', marginTop: '1rem' }}>
      La página que buscas no existe o ha sido movida.
    </p>
    <a
      href="/"
      style={{
        marginTop: '1.5rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.2s'
      }}
    >
      Volver al inicio
    </a>
  </div>
);

interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

const routeConfigs: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/create',
    component: CreateTask,
  },
  {
    path: '/edit/:id',
    component: CreateTask,
  },
];

const AppRoutes = (): ReactNode => {
  return (
    <Routes>
      {routeConfigs.map((route: RouteConfig) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.exact ? (
              <route.component />
            ) : (
              <Suspense fallback={<LoadingFallback />}>
                <route.component />
              </Suspense>
            )
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const RouterConfig = (): ReactNode => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export const getRoutePath = (routeName: string, params?: Record<string, string>): string => {
  const routes: Record<string, string> = {
    home: '/',
    create: '/create',
    edit: '/edit/:id',
  };

  let path = routes[routeName];
  if (!path) {
    console.warn(`Ruta '${routeName}' no encontrada`);
    return '/';
  }

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, value);
    });
  }

  return path;
};

export const isActiveRoute = (currentPath: string, targetPath: string): boolean => {
  const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
  const normalizedTarget = targetPath.replace(/\/$/, '') || '/';
  return normalizedCurrent === normalizedTarget;
};

export const RouteConfig = {
  map: <T, U>(
    array: T[],
    callback: (value: T, index: number, array: T[]) => U
  ): U[] => {
    return array.map(callback);
  },
  getAll: (): RouteConfig[] => routeConfigs,
  findByPath: (path: string): RouteConfig | undefined => {
    return routeConfigs.find(route => route.path === path);
  },
};

export default RouterConfig;