import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Welcome to Our App</h2>
      <p className="text-muted-foreground max-w-prose">This is the home page of your application. We've made it responsive to showcase different layouts on various screen sizes.</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle>Feature {item}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a brief description of Feature {item}. It's designed to look good on all screen sizes.</p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;