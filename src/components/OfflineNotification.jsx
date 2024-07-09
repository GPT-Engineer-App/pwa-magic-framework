import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { WifiOff } from "lucide-react";

const OfflineNotification = () => {
  const isOnline = useSelector((state) => state.network.isOnline);

  if (isOnline) {
    return null;
  }

  return (
    <Alert variant="destructive" className="fixed bottom-4 right-4 max-w-md">
      <WifiOff className="h-4 w-4" />
      <AlertTitle>Offline</AlertTitle>
      <AlertDescription>
        You are currently offline. Some features may be limited.
      </AlertDescription>
    </Alert>
  );
};

export default OfflineNotification;