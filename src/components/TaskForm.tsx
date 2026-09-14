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