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