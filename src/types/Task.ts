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