# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Boilerplate del stack que falta

Sin esto no compila ni arranca. Es andamiaje, no toca nada de lo pedagogico:

- **Punto de entrada del stack elegido** — Sin un punto de entrada reconocible, el runtime no tiene por donde arrancar la aplicacion.
- **Capa de interfaz (controller/handler)** — Sin una capa de interfaz explicita, no hay forma de invocar la logica de negocio desde afuera del proceso.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/routes.tsx` — `RouteConfig.map`: Se invoca `map` sobre `RouteConfig`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/routes.tsx` — `RouteConfig.find`: Se invoca `find` sobre `RouteConfig`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
el comando de build o arranque canonico del stack elegido
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Crear una aplicación React con TypeScript, componentes funcionales y hooks

### Reto
- Tema: React con TypeScript
- Seniority: junior-l1
- Tipo: practical
- Título: Desarrollo de una aplicación de seguimiento de tareas
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Creación de la estructura básica — objetivo: Establecer la estructura y navegación básica de la aplicación. — entregable (NO resolver): Proyecto React con TypeScript y navegación básica configurada.
- Fase 2: Creación de componentes funcionales — objetivo: Desarrollar los componentes necesarios para mostrar y manejar las tareas. — entregable (NO resolver): Componentes funcionales para la lista de tareas y el formulario de creación de tareas con estado local implementado.
- Fase 3: Implementación de la lógica de tareas — objetivo: Añadir la lógica para crear, editar y eliminar tareas. — entregable (NO resolver): Lógica implementada para crear, editar y eliminar tareas, con actualización en tiempo real de la lista de tareas.
- Fase 4: Mejora y escalabilidad — objetivo: Mejorar la aplicación y prepararla para futuras expansiones. — entregable (NO resolver): Aplicación mejorada y preparada para futuras expansiones.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "task-tracker-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.1",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@hooks/*": ["src/hooks/*"],
      "@context/*": ["src/context/*"],
      "@types/*": ["src/types/*"],
      "@utils/*": ["src/utils/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento root en el DOM. Verifica que index.html contenga <div id="root"></div>');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <App />
      </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}

window.addEventListener('error', (event) => {
  console.error('Error global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promesa rechazada no manejada:', event.reason);
});

// === ARCHIVO: src/App.tsx ===
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


// === ARCHIVO: src/pages/Home.tsx ===
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Task } from '@types/Task';
import { useTasks } from '@hooks/useTasks';
import { TaskList } from '@components/TaskList';
import { TaskItem } from '@components/TaskItem';

export function Home() {
  const { tasks, isLoading, error, fetchTasks, toggleComplete, deleteTask } = useTasks();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task: Task) => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'pending' && !task.completed) || 
      (filter === 'completed' && task.completed);
    
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const sortedTasks = [...filteredTasks].sort((a: Task, b: Task) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const handleToggleComplete = async (taskId: string) => {
    try {
      await toggleComplete(taskId);
    } catch (err) {
      console.error('Error al cambiar estado de tarea:', err);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');
    if (confirmDelete) {
      try {
        await deleteTask(taskId);
      } catch (err) {
        console.error('Error al eliminar tarea:', err);
      }
    }
  };

  const pendingCount = tasks.filter((t: Task) => !t.completed).length;
  const completedCount = tasks.filter((t: Task) => t.completed).length;

  if (isLoading) {
    return (
      <div className="home-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando tareas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="error-container">
          <h2>Error al cargar las tareas</h2>
          <p>{error}</p>
          <button onClick={() => fetchTasks()} className="retry-button">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Mis Tareas</h1>
        <div className="stats">
          <span className="stat pending">Pendientes: {pendingCount}</span>
          <span className="stat completed">Completadas: {completedCount}</span>
        </div>
      </header>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar tareas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pendientes
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completadas
          </button>
        </div>
        <div className="sort-box">
          <label>Ordenar por:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
            className="sort-select"
          >
            <option value="date">Fecha</option>
            <option value="title">Título</option>
          </select>
        </div>
      </div>

      <main className="tasks-container">
        {sortedTasks.length === 0 ? (
          <div className="empty-state">
            <p>No hay tareas que mostrar</p>
            <Link to="/create" className="create-first-task">
              Crear primera tarea
            </Link>
          </div>
        ) : (
          <TaskList>
            {sortedTasks.map((task: Task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
              />
            ))}
          </TaskList>
        )}
      </main>

      <Link to="/create" className="fab-button" aria-label="Crear nueva tarea">
        +
      </Link>
    </div>
  );
}

// === ARCHIVO: src/pages/CreateTask.tsx ===
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Task } from '@types/Task';
import { useTasks } from '@hooks/useTasks';
import { TaskForm } from '@components/TaskForm';
import { validateTask } from '@utils/taskUtils';

export function CreateTask() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { tasks, createTask, updateTask, getTaskById, isLoading } = useTasks();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<Partial<Task>>({
    title: '',
    description: '',
    priority: 'medium',
    completed: false,
    tags: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (isEditing && id) {
      const existingTask = getTaskById(id);
      if (existingTask) {
        setFormData(existingTask);
      } else {
        navigate('/');
      }
    }
  }, [id, isEditing, getTaskById, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !formData.tags?.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tag]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: (prev.tags || []).filter((tag) => tag !== tagToRemove)
    }));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateTask(formData as Task);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditing && id) {
        await updateTask(id, formData);
      } else {
        await createTask(formData as Omit<Task, 'id' | 'createdAt' | 'updatedAt'>);
      }
      navigate('/');
    } catch (err) {
      console.error('Error al guardar tarea:', err);
      setErrors({ submit: 'Error al guardar la tarea. Inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      completed: false,
      tags: []
    });
    setErrors({});
    setTagInput('');
  };

  return (
    <div className="create-task-page">
      <header className="page-header">
        <button onClick={handleCancel} className="back-button" aria-label="Volver">
          ← Volver
        </button>
        <h1>{isEditing ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h1>
      </header>

      <main className="form-container">
        <TaskForm
          formData={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          isEditing={isEditing}
          onChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          onReset={handleReset}
        />

        <div className="tags-section">
          <label htmlFor="tag-input">Etiquetas</label>
          <div className="tag-input-container">
            <input
              id="tag-input"
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              placeholder="Añadir etiqueta y presionar Enter"
              className="tag-input"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="add-tag-button"
              disabled={!tagInput.trim()}
            >
              Añadir
            </button>
          </div>
          <div className="tags-list">
            {formData.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="tag-remove"
                  aria-label={`Eliminar etiqueta ${tag}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {errors.submit && (
          <div className="error-message" role="alert">
            {errors.submit}
          </div>
        )}

        <div className="form-actions">
          <button
            type="button"
            onClick={handleReset}
            className="reset-button"
            disabled={isSubmitting}
          >
            Limpiar formulario
          </button>
        </div>
      </main>
    </div>
  );
}

// === ARCHIVO: src/components/TaskItem.tsx ===
import React, { useState } from 'react';
import { Task } from '@types/Task';
import { useTasks } from '@hooks/useTasks';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleToggleComplete = () => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  const handleSaveEdit = () => {
    if (!editTitle.trim()) return;
    
    updateTask({
      ...task,
      title: editTitle.trim(),
      description: editDescription.trim(),
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de eliminar "${task.title}"?`)) {
      deleteTask(task.id);
    }
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return 'Sin fecha';
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (isEditing) {
    return (
      <li className="task-item task-item--editing">
        <div className="task-edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="task-input"
            placeholder="Título de la tarea"
            aria-label="Editar título"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="task-textarea"
            placeholder="Descripción (opcional)"
            aria-label="Editar descripción"
            rows={3}
          />
          <div className="task-edit-actions">
            <button
              onClick={handleSaveEdit}
              className="btn btn--save"
              aria-label="Guardar cambios"
            >
              Guardar
            </button>
            <button
              onClick={handleCancelEdit}
              className="btn btn--cancel"
              aria-label="Cancelar edición"
            >
              Cancelar
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <div className="task-checkbox-wrapper">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          className="task-checkbox"
          aria-label={task.completed ? 'Marcar como incompleta' : 'Marcar como completada'}
        />
      </div>
      
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <span className="task-date">Creada: {formatDate(task.createdAt)}</span>
      </div>
      
      <div className="task-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn--edit"
          aria-label={`Editar ${task.title}`}
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="btn btn--delete"
          aria-label={`Eliminar ${task.title}`}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

// === ARCHIVO: src/components/TaskList.tsx ===
import React from 'react';
import { useTasks } from '@hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const { tasks, isLoading, error } = useTasks();

  if (isLoading) {
    return (
      <div className="task-list-container">
        <div className="task-list-loading" role="status" aria-live="polite">
          <div className="spinner" aria-hidden="true"></div>
          <p>Cargando tareas...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="task-list-container">
        <div className="task-list-error" role="alert">
          <p>Error al cargar las tareas: {error}</p>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="task-list-container">
        <div className="task-list-empty" role="status" aria-live="polite">
          <div className="empty-icon" aria-hidden="true">📋</div>
          <h3>No hay tareas todavía</h3>
          <p>Crea tu primera tarea usando el formulario de arriba</p>
        </div>
      </div>
    );
  }

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Mis Tareas</h2>
        <div className="task-list-stats" aria-label={`${completedCount} de ${totalCount} tareas completadas`}>
          <span className="stat-completed">{completedCount}</span>
          <span className="stat-separator">/</span>
          <span className="stat-total">{totalCount}</span>
          <span className="stat-label">completadas</span>
        </div>
      </div>

      <div className="task-list-progress" role="progressbar" aria-valuenow={completedCount} aria-valuemin={0} aria-valuemax={totalCount}>
        <div
          className="task-list-progress-bar"
          style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          aria-hidden="true"
        ></div>
      </div>

      <ul className="task-list" aria-label="Lista de tareas">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

// === ARCHIVO: src/components/TaskForm.tsx ===
import React, { useState, FormEvent } from 'react';
import { useTasks } from '@hooks/useTasks';

export const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setError('El título es obligatorio');
      return;
    }

    if (trimmedTitle.length < 3) {
      setError('El título debe tener al menos 3 caracteres');
      return;
    }

    if (trimmedTitle.length > 100) {
      setError('El título no puede exceder 100 caracteres');
      return;
    }

    setIsSubmitting(true);

    try {
      await addTask({
        title: trimmedTitle,
        description: trimmedDescription || undefined,
      });
      
      setTitle('');
      setDescription('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la tarea');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setError(null);
  };

  return (
    <div className="task-form-container">
      <h2 className="task-form-title">Crear Nueva Tarea</h2>
      
      {error && (
        <div className="task-form-error" role="alert">
          <span aria-hidden="true">⚠️</span>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="task-form" noValidate>
        <div className="form-group">
          <label htmlFor="task-title" className="form-label">
            Título <span className="required" aria-hidden="true">*</span>
          </label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="¿Qué necesitas hacer?"
            disabled={isSubmitting}
            maxLength={100}
            aria-required="true"
            aria-describedby={error ? 'task-title-error' : undefined}
          />
          <span className="form-hint">{title.length}/100 caracteres</span>
        </div>

        <div className="form-group">
          <label htmlFor="task-description" className="form-label">
            Descripción
          </label>
          <textarea
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            placeholder="Añade más detalles (opcional)"
            disabled={isSubmitting}
            rows={4}
            maxLength={500}
            aria-describedby="description-hint"
          />
          <span id="description-hint" className="form-hint">
            {description.length}/500 caracteres
          </span>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn--primary"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="btn-spinner" aria-hidden="true"></span>
                Creando...
              </>
            ) : (
              'Crear Tarea'
            )}
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            className="btn btn--secondary"
            disabled={isSubmitting || (!title && !description)}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

// === ARCHIVO: src/types/Task.ts ===
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export type TaskStatus = 'pending' | 'completed';

export interface TaskFormData {
  title: string;
  description: string;
}

export interface TaskFilter {
  status?: TaskStatus;
  searchTerm?: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: TaskFormData) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  getTaskById: (id: string) => Task | undefined;
  filterTasks: (filter: TaskFilter) => Task[];
}

export const createTask = (formData: TaskFormData): Task => ({
  id: crypto.randomUUID(),
  title: formData.title.trim(),
  description: formData.description.trim(),
  completed: false,
  createdAt: new Date(),
  updatedAt: undefined,
});

// === ARCHIVO: src/hooks/useTasks.ts ===
import { useCallback, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task, TaskFilter, TaskFormData } from '../types/Task';

export const useTasks = () => {
  const context = useTaskContext();
  
  if (!context) {
    throw new Error('useTasks debe ser usado dentro de un TaskProvider');
  }

  const { tasks, addTask, updateTask, deleteTask, toggleTaskCompletion, getTaskById, filterTasks } = context;

  const pendingTasks = useMemo(() => 
    tasks.filter(task => !task.completed), 
    [tasks]
  );

  const completedTasks = useMemo(() => 
    tasks.filter(task => task.completed), 
    [tasks]
  );

  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedCount = useMemo(() => completedTasks.length, [completedTasks]);
  const pendingCount = useMemo(() => pendingTasks.length, [pendingTasks]);

  const progressPercentage = useMemo(() => {
    if (totalTasks === 0) return 0;
    return Math.round((completedCount / totalTasks) * 100);
  }, [totalTasks, completedCount]);

  const handleAddTask = useCallback((formData: TaskFormData) => {
    if (!formData.title.trim()) {
      throw new Error('El título de la tarea no puede estar vacío');
    }
    addTask(formData);
  }, [addTask]);

  const handleUpdateTask = useCallback((id: string, updates: Partial<Task>) => {
    if (updates.title && !updates.title.trim()) {
      throw new Error('El título de la tarea no puede estar vacío');
    }
    updateTask(id, { ...updates, updatedAt: new Date() });
  }, [updateTask]);

  const handleDeleteTask = useCallback((id: string) => {
    const task = getTaskById(id);
    if (!task) {
      throw new Error('La tarea no existe');
    }
    deleteTask(id);
  }, [deleteTask, getTaskById]);

  const handleToggleCompletion = useCallback((id: string) => {
    const task = getTaskById(id);
    if (!task) {
      throw new Error('La tarea no existe');
    }
    toggleTaskCompletion(id);
  }, [toggleTaskCompletion, getTaskById]);

  const searchTasks = useCallback((searchTerm: string): Task[] => {
    const normalizedTerm = searchTerm.toLowerCase().trim();
    if (!normalizedTerm) return tasks;
    
    return tasks.filter(task => 
      task.title.toLowerCase().includes(normalizedTerm) ||
      task.description.toLowerCase().includes(normalizedTerm)
    );
  }, [tasks]);

  const sortTasksByDate = useCallback((ascending: boolean = true): Task[] => {
    return [...tasks].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }, [tasks]);

  return {
    tasks,
    pendingTasks,
    completedTasks,
    totalTasks,
    completedCount,
    pendingCount,
    progressPercentage,
    addTask: handleAddTask,
    updateTask: handleUpdateTask,
    deleteTask: handleDeleteTask,
    toggleTaskCompletion: handleToggleCompletion,
    getTaskById,
    filterTasks,
    searchTasks,
    sortTasksByDate,
  };
};

// === ARCHIVO: src/context/TaskContext.tsx ===
import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Task, TaskContextType, TaskFormData } from '../types/Task';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const STORAGE_KEY = 'task-tracker-tasks';

const loadTasksFromStorage = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((task: Task) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        updatedAt: task.updatedAt ? new Date(task.updatedAt) : undefined,
      }));
    }
  } catch (error) {
    console.error('Error al cargar tareas del almacenamiento local:', error);
  }
  return [];
};

const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error al guardar tareas en el almacenamiento local:', error);
  }
};

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = useCallback((formData: TaskFormData) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      completed: false,
      createdAt: new Date(),
      updatedAt: undefined,
    };
    setTasks(prev => [newTask, ...prev]);
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, ...updates, updatedAt: new Date() }
        : task
    ));
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const toggleTaskCompletion = useCallback((id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed, updatedAt: new Date() }
        : task
    ));
  }, []);

  const getTaskById = useCallback((id: string): Task | undefined => {
    return tasks.find(task => task.id === id);
  }, [tasks]);

  const filterTasks = useCallback((filter: { status?: 'pending' | 'completed'; searchTerm?: string }): Task[] => {
    let filtered = [...tasks];
    
    if (filter.status) {
      filtered = filtered.filter(task => 
        filter.status === 'completed' ? task.completed : !task.completed
      );
    }
    
    if (filter.searchTerm && filter.searchTerm.trim()) {
      const term = filter.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [tasks]);

  const value: TaskContextType = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    getTaskById,
    filterTasks,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType | undefined => {
  const context = useContext(TaskContext);
  return context;
};


// === ARCHIVO: src/utils/taskUtils.ts ===
import { Task } from '@types/Task';

export interface TaskFilterOptions {
  status?: 'all' | 'completed' | 'pending';
  searchTerm?: string;
  sortBy?: 'date' | 'title' | 'priority';
  sortOrder?: 'asc' | 'desc';
}

export const filterTasks = (tasks: Task[], options: TaskFilterOptions): Task[] => {
  let filtered = [...tasks];

  if (options.status && options.status !== 'all') {
    filtered = filtered.filter((task) =>
      options.status === 'completed' ? task.completed : !task.completed
    );
  }

  if (options.searchTerm && options.searchTerm.trim()) {
    const term = options.searchTerm.toLowerCase().trim();
    filtered = filtered.filter(
      (task) =>
        task.title.toLowerCase().includes(term) ||
        (task.description && task.description.toLowerCase().includes(term))
    );
  }

  if (options.sortBy) {
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (options.sortBy) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'date':
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          comparison = dateA - dateB;
          break;
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          comparison =
            (priorityOrder[a.priority as keyof typeof priorityOrder] || 2) -
            (priorityOrder[b.priority as keyof typeof priorityOrder] || 2);
          break;
      }

      return options.sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  return filtered;
};

export const validateTask = (task: Partial<Task>): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!task.title || task.title.trim().length === 0) {
    errors.push('El título de la tarea es obligatorio');
  } else if (task.title.trim().length < 3) {
    errors.push('El título debe tener al menos 3 caracteres');
  } else if (task.title.trim().length > 100) {
    errors.push('El título no puede exceder los 100 caracteres');
  }

  if (task.description && task.description.length > 500) {
    errors.push('La descripción no puede exceder los 500 caracteres');
  }

  const validPriorities = ['low', 'medium', 'high'];
  if (task.priority && !validPriorities.includes(task.priority)) {
    errors.push('La prioridad debe ser: low, medium o high');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const createTaskObject = (
  title: string,
  description: string = '',
  priority: 'low' | 'medium' | 'high' = 'medium'
): Omit<Task, 'id'> => {
  const now = new Date().toISOString();
  return {
    title: title.trim(),
    description: description.trim(),
    priority,
    completed: false,
    createdAt: now,
    updatedAt: now,
  };
};

export const toggleTaskCompletion = (task: Task): Task => {
  return {
    ...task,
    completed: !task.completed,
    updatedAt: new Date().toISOString(),
  };
};

export const updateTaskFields = (
  task: Task,
  updates: Partial<Pick<Task, 'title' | 'description' | 'priority' | 'completed'>>
): Task => {
  return {
    ...task,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};

export const getTaskStats = (tasks: Task[]) => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const byPriority = {
    high: tasks.filter((t) => t.priority === 'high').length,
    medium: tasks.filter((t) => t.priority === 'medium').length,
    low: tasks.filter((t) => t.priority === 'low').length,
  };

  return {
    total,
    completed,
    pending,
    completionRate,
    byPriority,
  };
};

export const formatTaskDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Hoy';
  } else if (diffDays === 1) {
    return 'Ayer';
  } else if (diffDays < 7) {
    return `Hace ${diffDays} días`;
  } else {
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
};

export const generateTaskId = (): string => {
  return `task_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export const duplicateTask = (task: Task): Task => {
  const now = new Date().toISOString();
  return {
    ...task,
    id: generateTaskId(),
    title: `${task.title} (copia)`,
    completed: false,
    createdAt: now,
    updatedAt: now,
  };
};
// === ARCHIVO: src/routes.tsx ===
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
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

const AppRoutes = () => {
  return (
    <Routes>
      {routeConfigs.map((route) => (
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

const RouterConfig = () => {
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

export default RouterConfig;


// === ARCHIVO: src/routes.tsx ===
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

```
