import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { supabase, subscribeToTable } from "@/integrations/supabase";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("event").select();
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data);
      }
    };

    fetchEvents();

    const subscription = subscribeToTable("event", (payload) => {
      console.log("Change received!", payload);
      fetchEvents();
    });

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

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

      <h3 className="text-xl font-bold mt-8 mb-4">Events</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date}</p>
              <p>Created At: {event.created_at}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;