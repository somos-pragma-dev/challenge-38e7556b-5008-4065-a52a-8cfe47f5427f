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