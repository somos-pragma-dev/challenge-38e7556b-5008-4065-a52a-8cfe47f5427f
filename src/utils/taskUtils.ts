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