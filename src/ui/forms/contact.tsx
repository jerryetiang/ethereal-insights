"use client";
import React from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import Link from "next/link";

const ContactForm: React.FC = () => {
  return (
    <div className="p-8">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="John Doe"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@example.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>
        <Button color="dark" className="" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
