import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const handleDarkModeToggle = () => {
    const newTheme = darkMode ? "light" : "dark";
    setTheme(newTheme);
    setDarkMode(!darkMode);
    toast.success(`Dark mode ${!darkMode ? 'enabled' : 'disabled'}`);
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
    toast.success(`Notifications ${!notifications ? 'enabled' : 'disabled'}`);
  };

  const handleChangePassword = () => {
    toast.info("Change password functionality not implemented yet");
  };

  const handleUpdateProfile = () => {
    toast.info("Update profile functionality not implemented yet");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Settings</h2>
      <p className="text-muted-foreground max-w-prose">Customize your application experience with these settings.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
              <span>Dark Mode</span>
              <span className="font-normal text-sm text-muted-foreground">Enable dark mode for a better night-time experience</span>
            </Label>
            <Switch id="dark-mode" checked={darkMode} onCheckedChange={handleDarkModeToggle} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="flex flex-col space-y-1">
              <span>Notifications</span>
              <span className="font-normal text-sm text-muted-foreground">Receive notifications about updates and new features</span>
            </Label>
            <Switch id="notifications" checked={notifications} onCheckedChange={handleNotificationsToggle} />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full sm:w-auto" onClick={handleChangePassword}>Change Password</Button>
          <Button variant="outline" className="w-full sm:w-auto" onClick={handleUpdateProfile}>Update Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;