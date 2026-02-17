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
import { tasks } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageSquare, FileText } from "lucide-react";

export default function TaskDetailPage({ params }: { params: { taskId: string } }) {
  const taskId = parseInt(params.taskId, 10);
  
  // Combine all tasks to find the one with the matching ID
  const allTasks = [
      ...tasks.originalPosts,
      ...tasks.copyPastePosts,
      ...tasks.commenting,
      ...tasks.acceptedTasks,
      ...tasks.completedTasks,
  ];

  const task = allTasks.find((t) => t.id === taskId);

  if (!task) {
    notFound();
  }
  
  const isAccepted = 'progress' in task;
  const isCompleted = 'completedDate' in task;


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
              {isCompleted ? `$${task.earned.toFixed(2)}` : `$${task.payment.toFixed(2)}`}
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
                    {'postUrl' in task && (
                      <Button variant="outline" asChild>
                          <a href={task.postUrl || '#'} target="_blank" rel="noopener noreferrer">
                              View Reddit Post <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                      </Button>
                    )}
                </div>
            )}
        </CardContent>
        {!isCompleted && (
          <CardFooter className="flex gap-2">
              <Button className="w-full">Submit Task</Button>
              <Button className="w-full" variant="destructive">Abandon Task</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
