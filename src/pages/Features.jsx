import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ObjectDetection from "@/components/ObjectDetection";

const Features = () => {
  const featuresList = [
    { title: "Responsive Design", description: "Our app looks great on all devices, from mobile to desktop." },
    { title: "User-Friendly Interface", description: "Intuitive controls and layouts for the best user experience." },
    { title: "Fast Performance", description: "Optimized code ensures quick loading and smooth interactions." },
    { title: "Regular Updates", description: "We constantly improve and add new features based on user feedback." },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Features</h2>
      <p className="text-muted-foreground max-w-prose">Discover what makes our application stand out from the rest.</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {featuresList.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Object Detection Demo</h3>
      <ObjectDetection />
    </div>
  );
};

export default Features;