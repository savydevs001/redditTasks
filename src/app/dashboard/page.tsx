import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { user, earnings, accountStats, tasks } from "@/lib/placeholder-data";
import EarningsChart from "@/components/dashboard/earnings-chart";
import { ArrowUpRight, CheckCircle, Clock, ListTodo } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const totalTasksAvailable = tasks.originalPosts.length + tasks.copyPastePosts.length + tasks.commenting.length;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user.name.split(" ")[0]}!</h1>
        <p className="text-muted-foreground">Here's a summary of your account and available tasks.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <span className="text-2xl text-accent-foreground">$</span>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">${earnings.total.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{accountStats.tasksCompleted}</div>
            <p className="text-xs text-muted-foreground">Member since {accountStats.memberSince}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Tasks</CardTitle>
            <ListTodo className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalTasksAvailable}</div>
            <p className="text-xs text-muted-foreground">New tasks added daily</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reputation</CardTitle>
            <Badge variant="secondary" className="text-sm">{accountStats.reputation}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">Task success rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="font-headline">Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <EarningsChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Quick Start</CardTitle>
            <CardDescription>
              Jump right into a new task.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex-1">
                  <p className="font-semibold">{tasks.originalPosts[0].title}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{tasks.originalPosts[0].subreddit}</span>
                    <Badge variant="outline">${tasks.originalPosts[0].payment.toFixed(2)}</Badge>
                  </div>
                </div>
                <Button asChild size="sm" className="shrink-0">
                  <Link href="/dashboard/tasks">Start Task</Link>
                </Button>
            </div>
             <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex-1">
                  <p className="font-semibold">{tasks.commenting[0].title}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">${tasks.commenting[0].payment.toFixed(2)}</Badge>
                  </div>
                </div>
                <Button asChild size="sm" className="shrink-0">
                  <Link href="/dashboard/tasks">Start Task</Link>
                </Button>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/tasks">View All Tasks <ArrowUpRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
