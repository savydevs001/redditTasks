"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

export default function NotificationSettings() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Notifications Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  return (
    <Card className="max-w-md mt-4">
      <CardHeader>
        <CardTitle className="font-headline">Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <Label htmlFor="new-tasks" className="flex flex-col space-y-1">
              <span>New Tasks</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Get notified when new tasks that match your profile are available.
              </span>
            </Label>
            <Switch id="new-tasks" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <Label htmlFor="payment-success" className="flex flex-col space-y-1">
              <span>Payment Successful</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive a notification when a payment is sent to your account.
              </span>
            </Label>
            <Switch id="payment-success" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <Label htmlFor="weekly-summary" className="flex flex-col space-y-1">
              <span>Weekly Summary</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive a weekly summary of your earnings and activity.
              </span>
            </Label>
            <Switch id="weekly-summary" />
          </div>
          <Button type="submit">Save Preferences</Button>
        </form>
      </CardContent>
    </Card>
  );
}
