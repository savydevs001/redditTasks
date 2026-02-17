"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageSquare, FileText } from "lucide-react";
import { useTasks } from "@/context/tasks-context";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export default function TaskDetailPage({ params }: { params: { taskId: string } }) {
  const router = useRouter();
  const { findTask, updateTaskProgress, submitTask } = useTasks();
  const taskId = parseInt(params.taskId, 10);
  
  const task = findTask(taskId);

  // This is a simulation of doing the work
  useEffect(() => {
    if (task && 'progress' in task && task.progress < 100) {
      const interval = setInterval(() => {
        // Here we check task again from context to get the latest progress
        const currentTask = findTask(taskId);
        if (currentTask && 'progress' in currentTask && currentTask.progress < 100) {
            updateTaskProgress(taskId, Math.min(currentTask.progress + 20, 100));
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [task, taskId, updateTaskProgress, findTask]);


  if (!task) {
    // Redirect or show not found after a delay to allow state to load
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!findTask(taskId)) {
                notFound();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [findTask, taskId]);

    return <div>Loading task...</div>;
  }
  
  const isAccepted = 'progress' in task;
  const isCompleted = 'completedDate' in task;

  const handleSubmit = () => {
    submitTask(taskId);
    toast({
      title: "Task Submitted!",
      description: "Great work! Your earnings have been updated.",
    });
    router.push('/dashboard/tasks');
  }

  const handleAbandon = () => {
      toast({
          variant: "destructive",
          title: "Task Abandoned",
          description: "The task has been removed from your in-progress list.",
      });
      // This is a simplified version. A full implementation would move the task back.
      router.push('/dashboard/tasks');
  }


  return (
    <div className="space-y-6">
       <Button variant="outline" asChild>
          <Link href="/dashboard/tasks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tasks
          </Link>
        </Button>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-headline">{task.title}</CardTitle>
            <Badge variant="secondary" className="bg-accent text-accent-foreground whitespace-nowrap text-lg">
              {isCompleted ? `$${('earned' in task && task.earned.toFixed(2))}` : `$${task.payment.toFixed(2)}`}
            </Badge>
          </div>
          {task.subreddit && <CardDescription>{task.subreddit}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-6">
            {isAccepted && (
                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <p className="text-sm font-medium text-muted-foreground">{task.status}</p>
                       <p className="text-sm font-bold">{task.progress}%</p>
                    </div>
                    <Progress value={task.progress} aria-label={`${task.progress}% complete`} />
                  </div>
            )}

            {task.type === 'original' && 'description' in task && (
                <div className="space-y-2">
                    <h3 className="font-semibold flex items-center"><FileText className="mr-2 h-5 w-5 text-primary"/>Task Description</h3>
                    <p className="text-muted-foreground">{task.description}</p>
                </div>
            )}
            {task.type === 'copy-paste' && 'content' in task && (
                <div className="space-y-2">
                    <h3 className="font-semibold flex items-center"><FileText className="mr-2 h-5 w-5 text-primary"/>Content to Post</h3>
                    <blockquote className="border-l-2 pl-4 italic bg-muted/50 p-4 rounded-r-lg">{task.content}</blockquote>
                </div>
            )}
            {task.type === 'comment' && 'comment' in task && (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="font-semibold flex items-center"><MessageSquare className="mr-2 h-5 w-5 text-primary"/>Comment to Post</h3>
                        <blockquote className="border-l-2 pl-4 italic bg-muted/50 p-4 rounded-r-lg">{task.comment}</blockquote>
                    </div>
                    {'postUrl' in task && task.postUrl && (
                      <Button variant="outline" asChild>
                          <a href={task.postUrl} target="_blank" rel="noopener noreferrer">
                              View Reddit Post <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                      </Button>
                    )}
                </div>
            )}
        </CardContent>
        {!isCompleted && isAccepted && (
          <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button className="w-full" onClick={handleSubmit} disabled={task.progress < 100}>
                {task.progress < 100 ? 'In Progress...' : 'Submit Task'}
              </Button>
              <Button className="w-full" variant="destructive" onClick={handleAbandon}>Abandon Task</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
