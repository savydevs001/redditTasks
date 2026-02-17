import { TasksProvider } from '@/context/tasks-context';

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TasksProvider>{children}</TasksProvider>;
}
