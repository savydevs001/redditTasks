"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { referrals } from "@/lib/placeholder-data";
import { Copy, Gift } from "lucide-react";

export default function ReferralsPage() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referrals.link);
    toast({
      title: "Copied to clipboard!",
      description: "Your referral link has been copied.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Referral Program</h1>
        <p className="text-muted-foreground">
          Invite friends and earn rewards for every new user who signs up.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Referral Link</CardTitle>
            <CardDescription>
              Share this link with your friends to invite them.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input value={referrals.link} readOnly />
              <Button size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Referral Stats</CardTitle>
            <CardDescription>
              Track your referral performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1 rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Total Referrals</p>
              <p className="text-2xl font-bold">{referrals.count}</p>
            </div>
            <div className="flex flex-col space-y-1 rounded-lg border p-4 bg-accent/50">
              <p className="text-sm text-muted-foreground">Referral Earnings</p>
              <p className="text-2xl font-bold text-accent-foreground">${referrals.earnings.toFixed(2)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Referred Users</CardTitle>
          <CardDescription>
            List of users who signed up through your link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {referrals.referredUsers.map((user, index) => (
              <div key={index} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.avatarUrl} alt="Avatar" />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">Joined on {user.date}</p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-1 text-green-600">
                  <Gift className="h-4 w-4"/> $5.00
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
