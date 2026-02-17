"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import TaskCard from "@/components/tasks/task-card";
import { tasks } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Tasks</h1>
        <p className="text-muted-foreground">
          Manage your available, ongoing, and completed tasks.
        </p>
      </div>
      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="available">
          <div className="text-muted-foreground mt-4">
            <p>Choose a task to complete and earn rewards. New tasks are added regularly.</p>
          </div>
          <Tabs defaultValue="original" className="w-full mt-4">
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
        </TabsContent>
        <TabsContent value="in-progress">
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {tasks.acceptedTasks.map((task) => (
              <Card key={task.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold leading-snug">{task.title}</CardTitle>
                  <CardDescription>Payment: ${task.payment.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <p className="text-sm font-medium text-muted-foreground">{task.status}</p>
                       <p className="text-sm font-bold">{task.progress}%</p>
                    </div>
                    <Progress value={task.progress} aria-label={`${task.progress}% complete`} />
                  </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/dashboard/tasks/${task.id}`}>View Details</Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
              <CardDescription>A record of your successfully completed tasks and earnings.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead className="text-center">Completed On</TableHead>
                    <TableHead className="text-right">Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.completedTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.title}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{task.completedDate}</TableCell>
                      <TableCell className="text-right font-medium text-accent-foreground">${task.earned.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
