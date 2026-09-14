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