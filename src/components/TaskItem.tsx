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