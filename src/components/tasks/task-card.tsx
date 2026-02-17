import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Task } from "@/lib/placeholder-data";

export default function TaskCard({ task, onAccept }: { task: Task, onAccept: (taskId: number) => void }) {
  const handleAccept = () => {
    onAccept(task.id);
    toast({
      title: "Task Accepted!",
      description: `You have accepted the task: "${task.title}"`,
    });
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-semibold leading-snug">{task.title}</CardTitle>
            <Badge variant="secondary" className="bg-accent text-accent-foreground whitespace-nowrap">
              ${task.payment.toFixed(2)}
            </Badge>
        </div>
        {task.subreddit && (
          <CardDescription>{task.subreddit}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow text-sm text-muted-foreground">
        {task.type === 'original' && <p className="line-clamp-3">{task.description}</p>}
        {task.type === 'copy-paste' && (
          <blockquote className="border-l-2 pl-4 italic line-clamp-3">{task.content}</blockquote>
        )}
        {task.type === 'comment' && (
          <div>
            <p className="mb-2">
              Comment on{" "}
              <Link href={task.postUrl || '#'} target="_blank" className="text-primary underline hover:no-underline">
                this post
              </Link>:
            </p>
            <blockquote className="border-l-2 pl-4 italic line-clamp-3">{task.comment}</blockquote>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAccept}>Accept Task</Button>
      </CardFooter>
    </Card>
  );
}
