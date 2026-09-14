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