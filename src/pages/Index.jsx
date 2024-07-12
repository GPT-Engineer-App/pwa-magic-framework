import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Welcome to Our App</h2>
      <p className="text-muted-foreground max-w-prose">This is the home page of your application. We've made it responsive to showcase different layouts on various screen sizes.</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Features", description: "Explore the key features of our application.", link: "/features" },
          { title: "User Manual", description: "Learn how to use our app effectively.", link: "/user-manual" },
          { title: "Help & Support", description: "Get assistance and answers to your questions.", link: "/help" }
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
              <Button className="mt-4" asChild>
                <Link to={item.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;