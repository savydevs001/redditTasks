"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskCard from "@/components/tasks/task-card";
import { tasks } from "@/lib/placeholder-data";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Available Tasks</h1>
        <p className="text-muted-foreground">
          Choose a task to complete and earn rewards. New tasks are added regularly.
        </p>
      </div>
      <Tabs defaultValue="original" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="original">Original Posts</TabsTrigger>
          <TabsTrigger value="copy-paste">Copy & Paste</TabsTrigger>
          <TabsTrigger value="commenting">Commenting</TabsTrigger>
        </TabsList>
        <TabsContent value="original">
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.originalPosts.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="copy-paste">
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.copyPastePosts.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="commenting">
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.commenting.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
