"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

interface GeneralSettings {
  siteName: string;
  siteDescription: string;
  postsPerPage: number;
  allowComments: boolean;
  moderateComments: boolean;
  theme: string;
}

interface UserPreferences {
  email: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  language: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  notifyOnComments: boolean;
  notifyOnLikes: boolean;
  digestFrequency: string;
}

export default function SettingsComponent() {
  const [generalSettings, setGeneralSettings] = useState<GeneralSettings>({
    siteName: "My Awesome Blog",
    siteDescription: "A place for my thoughts and ideas",
    postsPerPage: 10,
    allowComments: true,
    moderateComments: true,
    theme: "light",
  });

  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    email: "user@example.com",
    displayName: "John Doe",
    bio: "I'm a passionate blogger and tech enthusiast.",
    avatarUrl: "",
    language: "en",
  });

  const [notificationSettings, setNotificationSettings] =
    useState<NotificationSettings>({
      emailNotifications: true,
      pushNotifications: false,
      notifyOnComments: true,
      notifyOnLikes: false,
      digestFrequency: "weekly",
    });

  const handleGeneralSettingsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setGeneralSettings((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleUserPreferencesChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationSettingsChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, type, checked } = e.target;
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : e.target.value,
    }));
  };

  const handleSaveSettings = () => {
    console.log("Saving settings:", {
      generalSettings,
      userPreferences,
      notificationSettings,
    });
    toast({
      title: "Settings saved",
      description: "Your changes have been successfully saved.",
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Settings</h1>
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="user">User Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your blog's general settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  name="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  name="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postsPerPage">Posts Per Page</Label>
                <Slider
                  id="postsPerPage"
                  name="postsPerPage"
                  min={5}
                  max={50}
                  step={5}
                  value={[generalSettings.postsPerPage]}
                  onValueChange={([value]) =>
                    setGeneralSettings((prev) => ({
                      ...prev,
                      postsPerPage: value,
                    }))
                  }
                />
                <span>{generalSettings.postsPerPage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="allowComments"
                  name="allowComments"
                  checked={generalSettings.allowComments}
                  onCheckedChange={(checked) =>
                    setGeneralSettings((prev) => ({
                      ...prev,
                      allowComments: checked,
                    }))
                  }
                />
                <Label htmlFor="allowComments">Allow Comments</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="moderateComments"
                  name="moderateComments"
                  checked={generalSettings.moderateComments}
                  onCheckedChange={(checked) =>
                    setGeneralSettings((prev) => ({
                      ...prev,
                      moderateComments: checked,
                    }))
                  }
                />
                <Label htmlFor="moderateComments">Moderate Comments</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select
                  name="theme"
                  value={generalSettings.theme}
                  onValueChange={(value) =>
                    setGeneralSettings((prev) => ({ ...prev, theme: value }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Preferences</CardTitle>
              <CardDescription>Manage your personal settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userPreferences.email}
                  onChange={handleUserPreferencesChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  name="displayName"
                  value={userPreferences.displayName}
                  onChange={handleUserPreferencesChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={userPreferences.bio}
                  onChange={handleUserPreferencesChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatarUrl">Avatar URL</Label>
                <Input
                  id="avatarUrl"
                  name="avatarUrl"
                  value={userPreferences.avatarUrl}
                  onChange={handleUserPreferencesChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  name="language"
                  value={userPreferences.language}
                  onValueChange={(value) =>
                    setUserPreferences((prev) => ({ ...prev, language: value }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingsChange({
                      target: {
                        name: "emailNotifications",
                        type: "checkbox",
                        checked,
                      },
                    } as ChangeEvent<HTMLInputElement>)
                  }
                />
                <Label htmlFor="emailNotifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="pushNotifications"
                  name="pushNotifications"
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingsChange({
                      target: {
                        name: "pushNotifications",
                        type: "checkbox",
                        checked,
                      },
                    } as ChangeEvent<HTMLInputElement>)
                  }
                />
                <Label htmlFor="pushNotifications">Push Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifyOnComments"
                  name="notifyOnComments"
                  checked={notificationSettings.notifyOnComments}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingsChange({
                      target: {
                        name: "notifyOnComments",
                        type: "checkbox",
                        checked,
                      },
                    } as ChangeEvent<HTMLInputElement>)
                  }
                />
                <Label htmlFor="notifyOnComments">Notify on Comments</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifyOnLikes"
                  name="notifyOnLikes"
                  checked={notificationSettings.notifyOnLikes}
                  onCheckedChange={(checked) =>
                    handleNotificationSettingsChange({
                      target: {
                        name: "notifyOnLikes",
                        type: "checkbox",
                        checked,
                      },
                    } as ChangeEvent<HTMLInputElement>)
                  }
                />
                <Label htmlFor="notifyOnLikes">Notify on Likes</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="digestFrequency">Digest Frequency</Label>
                <Select
                  name="digestFrequency"
                  value={notificationSettings.digestFrequency}
                  onValueChange={(value) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      digestFrequency: value,
                    }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-6" />

      <div className="flex justify-end">
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </div>
    </div>
  );
}
