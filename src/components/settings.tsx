"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Bell,
  Shield,
  Webhook,
  Phone,
  Calendar,
  Save,
  Copy,
  TestTube,
} from "lucide-react";

export function Settings() {
  const webhookUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/api/webhooks/retell`;

  const copyWebhookUrl = () => {
    navigator.clipboard.writeText(webhookUrl);
  };

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="general"
        className="space-y-4 dark:bg-gray-900 dark:text-white">
        <TabsList className="grid w-full grid-cols-5 dark:bg-gray-800 dark:text-white">
          <TabsTrigger
            value="general"
            className="dark:bg-gray-800 dark:text-white">
            General
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="dark:bg-gray-800 dark:text-white">
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="dark:bg-gray-800 dark:text-white">
            Integrations
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="dark:bg-gray-800 dark:text-white">
            Security
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="dark:bg-gray-800 dark:text-white">
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <User className="h-5 w-5" />
                <span>Profile Settings</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Manage your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="dark:text-gray-200">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="John"
                    className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="dark:text-gray-200">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Doe"
                    className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@admindo.com"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="dark:text-gray-200">
                  Company
                </Label>
                <Input
                  id="company"
                  defaultValue="AdminDo"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone" className="dark:text-gray-200">
                  Timezone
                </Label>
                <Select defaultValue="est">
                  <SelectTrigger className="dark:bg-gray-900 dark:text-white dark:border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-900 dark:text-white">
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Phone className="h-5 w-5" />
                <span>Call Settings</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Configure default call behaviour and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-record calls</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically record all incoming and outgoing calls
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Call transcription</Label>
                  <p className="text-sm text-muted-foreground">
                    Generate automatic transcripts for all calls
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxCallDuration">
                  Maximum call duration (minutes)
                </Label>
                <Input id="maxCallDuration" type="number" defaultValue="30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Bell className="h-5 w-5" />
                <span>Notification Preferences</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Choose how you want to be notified about important events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email alerts for important events
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New appointment notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when appointments are booked
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Call completion alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts when calls are completed
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Daily summary reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Get daily performance summaries via email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Webhook className="h-5 w-5" />
                <span>Retell AI Integration</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Configure your Retell AI webhook settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Webhook URL</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={webhookUrl}
                    readOnly
                    className="font-mono text-sm dark:bg-gray-900 dark:text-white dark:border-gray-700"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyWebhookUrl}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add this URL to your Retell AI Agent Level Webhook settings
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhookSecret">Webhook Secret</Label>
                <Input
                  id="webhookSecret"
                  type="password"
                  placeholder="Enter your webhook secret"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
                <p className="text-sm text-muted-foreground">
                  This secret is used to verify webhook authenticity
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Integration
                </Button>
                <Button variant="outline">
                  <TestTube className="h-4 w-4 mr-2" />
                  Test Webhook
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Supported Events</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">call_started</Badge>
                  <Badge variant="outline">call_ended</Badge>
                  <Badge variant="outline">call_analysed</Badge>
                  <Badge variant="outline">appointment_booked</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Calendar className="h-5 w-5" />
                <span>Calendar Integration</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Connect your calendar for appointment scheduling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calendarProvider">Calendar Provider</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select calendar provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Calendar</SelectItem>
                    <SelectItem value="outlook">Microsoft Outlook</SelectItem>
                    <SelectItem value="apple">Apple Calendar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Connect Calendar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Manage your account security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>
              <Button>Update Password</Button>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-factor authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after inactivity
                  </p>
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-32 dark:bg-gray-900 dark:text-white dark:border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="240">4 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card className="dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Manage your subscription and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Pro Plan</h4>
                  <p className="text-sm text-muted-foreground">
                    $99/month • Unlimited calls and agents
                  </p>
                </div>
                <Badge>Active</Badge>
              </div>

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <div className="flex items-center justify-between p-3 border rounded">
                  <span className="text-sm">•••• •••• •••• 4242</span>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Billing Address</Label>
                <Textarea
                  placeholder="Enter your billing address"
                  className="dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <div className="flex space-x-2">
                <Button variant="outline">Download Invoice</Button>
                <Button variant="outline">Billing History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
