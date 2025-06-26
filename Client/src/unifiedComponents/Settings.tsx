import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Settings: React.FC = () => {
  const router = useRouter();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const goBack = () => {
    // Extract role and id from the current pathname
    // Pattern: /[role]/[id]/profile/settings -> /[role]/[id]
    const pathSegments = router.asPath.split("/");
    if (pathSegments.length >= 3) {
      const role = pathSegments[1]; // e.g., 'student'
      const id = pathSegments[2]; // e.g., the user id
      router.push(`/${role}/${id}`);
    } else {
      // Fallback: go back in history
      router.back();
    }
  };

  const handleChangePassword = () => {
    // Password change logic here
    console.log('Changing password...');
    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-theme">Settings</h1>
        <Button 
          onClick={goBack} 
          variant="outline"
          size="sm"
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          Back
        </Button>
      </div>

      {/* Appearance Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-theme mb-4">Appearance</h2>
        <div className="flex flex-wrap gap-3">
            <ThemeToggle />
        </div>
      </div>

      {/* Language Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-theme mb-4">Language</h2>
        <div className="w-full sm:w-64">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-theme mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-base font-medium text-theme">Email Notifications</span>
              <p className="text-sm text-muted">Receive updates about your account and activity</p>
            </div>
            <Switch 
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              label="Email Notifications"
            />
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-base font-medium text-theme">Push Notifications</span>
              <p className="text-sm text-muted">Get notified about new messages and events</p>
            </div>
            <Switch 
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
              label="Push Notifications"
            />
          </div>
        </div>
      </div>

      {/* Password & Security Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-theme mb-4">Password & Security</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-theme mb-2">Current Password</label>
            <Input 
              type="password" 
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-theme mb-2">New Password</label>
            <Input 
              type="password" 
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-theme mb-2">Confirm New Password</label>
            <Input 
              type="password" 
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button 
            onClick={handleChangePassword}
            className="w-full sm:w-auto"
            disabled={!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword}
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
