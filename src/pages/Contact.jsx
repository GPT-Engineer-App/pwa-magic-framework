import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Contact Us</h2>
      <p className="text-muted-foreground max-w-prose">We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" rows={4} />
            </div>
            <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;