import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Can I use the app offline?",
      answer: "Some features of our app are available offline, but for full functionality, an internet connection is required. Offline mode is limited to viewing previously loaded data and basic interactions."
    },
    {
      question: "How do I update the app?",
      answer: "Our web app updates automatically when you refresh the page. For mobile apps, check your device's app store for any available updates and install them to ensure you have the latest version."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We use industry-standard security protocols and regularly audit our systems to ensure your information is protected."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team through the 'Contact' page in the app, or by emailing support@ourapp.com. We aim to respond to all inquiries within 24 hours."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Help & Support</h2>
      <p className="text-muted-foreground max-w-prose">
        Find answers to common questions and learn how to make the most of our application.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="search"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">If you couldn't find the answer you were looking for, our support team is here to help.</p>
          <Button>Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;