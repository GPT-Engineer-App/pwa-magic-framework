import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
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
            <Switch id="dark-mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="flex flex-col space-y-1">
              <span>Notifications</span>
              <span className="font-normal text-sm text-muted-foreground">Receive notifications about updates and new features</span>
            </Label>
            <Switch id="notifications" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full sm:w-auto">Change Password</Button>
          <Button variant="outline" className="w-full sm:w-auto">Update Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;