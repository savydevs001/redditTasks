"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { tasks as initialTasksData, Task, AcceptedTask, CompletedTask } from '@/lib/placeholder-data';

type TasksData = {
  originalPosts: Task[];
  copyPastePosts: Task[];
  commenting: Task[];
  acceptedTasks: AcceptedTask[];
  completedTasks: CompletedTask[];
};

type TasksContextType = {
  tasks: TasksData;
  acceptTask: (taskId: number) => void;
  submitTask: (taskId: number) => void;
  updateTaskProgress: (taskId: number, progress: number) => void;
  findTask: (taskId: number) => Task | AcceptedTask | CompletedTask | undefined;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TasksData>(initialTasksData);

  const acceptTask = (taskId: number) => {
    setTasks(currentTasks => {
      const newTasks = JSON.parse(JSON.stringify(currentTasks)); // Deep copy for mutation
      let taskToMove: Task | undefined;
      let taskType: 'originalPosts' | 'copyPastePosts' | 'commenting' | undefined;

      const findTaskTuple = (id: number): [Task | undefined, 'originalPosts' | 'copyPastePosts' | 'commenting' | undefined] => {
          let task = newTasks.originalPosts.find((t: Task) => t.id === id);
          if (task) return [task, 'originalPosts'];
          task = newTasks.copyPastePosts.find((t: Task) => t.id === id);
          if (task) return [task, 'copyPastePosts'];
          task = newTasks.commenting.find((t: Task) => t.id === id);
          if (task) return [task, 'commenting'];
          return [undefined, undefined];
      };

      [taskToMove, taskType] = findTaskTuple(taskId);

      if (taskToMove && taskType) {
        newTasks[taskType] = newTasks[taskType].filter((t: Task) => t.id !== taskId);
        
        const acceptedTask: AcceptedTask = {
          ...taskToMove,
          progress: 0,
          status: 'Accepted'
        };
        newTasks.acceptedTasks.unshift(acceptedTask);
      }
      return newTasks;
    });
  };

  const submitTask = (taskId: number) => {
    setTasks(currentTasks => {
        const newTasks = JSON.parse(JSON.stringify(currentTasks));
        const taskIndex = newTasks.acceptedTasks.findIndex((t: AcceptedTask) => t.id === taskId);
        if (taskIndex > -1) {
            const taskToMove = newTasks.acceptedTasks[taskIndex];
            newTasks.acceptedTasks.splice(taskIndex, 1);

            const completedTask: CompletedTask = {
                id: taskToMove.id,
                type: taskToMove.type,
                title: taskToMove.title,
                completedDate: new Date().toISOString(),
                earned: taskToMove.payment,
                payment: taskToMove.payment,
                subreddit: taskToMove.subreddit,
                description: taskToMove.description,
                content: taskToMove.content,
                postUrl: taskToMove.postUrl,
                comment: taskToMove.comment,
            };
            newTasks.completedTasks.unshift(completedTask);
        }
        return newTasks;
    });
  };

  const updateTaskProgress = (taskId: number, progress: number) => {
    setTasks(currentTasks => {
        const newTasks = JSON.parse(JSON.stringify(currentTasks));
        const task = newTasks.acceptedTasks.find((t: AcceptedTask) => t.id === taskId);
        if (task) {
            task.progress = progress;
            if (progress === 0) task.status = 'Accepted';
            else if (progress > 0 && progress < 100) task.status = 'In Progress';
            else if (progress === 100) task.status = 'Ready for Submission';
        }
        return newTasks;
    });
  };

  const findTask = (taskId: number) => {
    const allTasks = [
      ...tasks.originalPosts,
      ...tasks.copyPastePosts,
      ...tasks.commenting,
      ...tasks.acceptedTasks,
      ...tasks.completedTasks,
    ];
    return allTasks.find(t => t.id === taskId);
  };

  return (
    <TasksContext.Provider value={{ tasks, acceptTask, submitTask, updateTaskProgress, findTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
