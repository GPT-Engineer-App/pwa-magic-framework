import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserManual = () => {
  const [activeTab, setActiveTab] = useState("getting-started");

  const sections = [
    { id: "getting-started", title: "Getting Started" },
    { id: "features", title: "Features" },
    { id: "training-model", title: "Training the Model" },
    { id: "troubleshooting", title: "Troubleshooting" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">User Manual</h2>
      <p className="text-muted-foreground max-w-prose">
        Welcome to the user manual. Here you'll find comprehensive guides on how to use our application effectively.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {section.id === "getting-started" && (
                  <div className="space-y-4">
                    <p>Welcome to our application! Follow these steps to get started:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Create an account or log in if you already have one.</li>
                      <li>Explore the dashboard to familiarize yourself with the layout.</li>
                      <li>Check out the Features section to learn about available tools.</li>
                      <li>Customize your settings to optimize your experience.</li>
                    </ol>
                  </div>
                )}
                {section.id === "features" && (
                  <div className="space-y-4">
                    <p>Our application offers a range of powerful features:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Real-time data visualization</li>
                      <li>Advanced analytics tools</li>
                      <li>Customizable dashboards</li>
                      <li>Collaboration features for team projects</li>
                    </ul>
                  </div>
                )}
                {section.id === "training-model" && (
                  <div className="space-y-4">
                    <p>To train the model, follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Prepare your dataset ensuring it's properly labeled and formatted.</li>
                      <li>Navigate to the "Model Training" section in the application.</li>
                      <li>Upload your dataset and select the appropriate training parameters.</li>
                      <li>Start the training process and monitor progress in real-time.</li>
                      <li>Once training is complete, evaluate the model's performance using the provided metrics.</li>
                      <li>Fine-tune the model if necessary by adjusting parameters and retraining.</li>
                    </ol>
                    <p>Note: Training times may vary depending on the size of your dataset and the complexity of the model.</p>
                  </div>
                )}
                {section.id === "troubleshooting" && (
                  <div className="space-y-4">
                    <p>If you encounter any issues, try these troubleshooting steps:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Refresh the page and try again.</li>
                      <li>Clear your browser cache and cookies.</li>
                      <li>Check your internet connection.</li>
                      <li>Ensure you're using a supported browser and it's up to date.</li>
                      <li>If the problem persists, contact our support team.</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default UserManual;