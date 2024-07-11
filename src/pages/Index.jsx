import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCounts } from "../integrations/supabase";

const Index = () => {
  const { data: dailyCounts, error: dailyError, isLoading: dailyLoading } = useQuery({
    queryKey: ['dailyCounts'],
    queryFn: () => fetchCounts('daily')
  });

  const { data: weeklyCounts, error: weeklyError, isLoading: weeklyLoading } = useQuery({
    queryKey: ['weeklyCounts'],
    queryFn: () => fetchCounts('weekly')
  });

  const { data: monthlyCounts, error: monthlyError, isLoading: monthlyLoading } = useQuery({
    queryKey: ['monthlyCounts'],
    queryFn: () => fetchCounts('monthly')
  });

  const { data: allTimeCounts, error: allTimeError, isLoading: allTimeLoading } = useQuery({
    queryKey: ['allTimeCounts'],
    queryFn: () => fetchCounts('all-time')
  });

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Daily Counts</CardTitle>
          </CardHeader>
          <CardContent>
            {dailyLoading ? (
              <p>Loading...</p>
            ) : dailyError ? (
              <p>Error loading daily counts</p>
            ) : (
              <p>{dailyCounts.length} counts</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Counts</CardTitle>
          </CardHeader>
          <CardContent>
            {weeklyLoading ? (
              <p>Loading...</p>
            ) : weeklyError ? (
              <p>Error loading weekly counts</p>
            ) : (
              <p>{weeklyCounts.length} counts</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Counts</CardTitle>
          </CardHeader>
          <CardContent>
            {monthlyLoading ? (
              <p>Loading...</p>
            ) : monthlyError ? (
              <p>Error loading monthly counts</p>
            ) : (
              <p>{monthlyCounts.length} counts</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>All-Time Counts</CardTitle>
          </CardHeader>
          <CardContent>
            {allTimeLoading ? (
              <p>Loading...</p>
            ) : allTimeError ? (
              <p>Error loading all-time counts</p>
            ) : (
              <p>{allTimeCounts.length} counts</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;