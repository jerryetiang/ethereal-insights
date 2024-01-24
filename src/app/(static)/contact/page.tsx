import React from "react";
import ContactForm from "@/ui/forms/contact";
import Image from "next/image";
import InsightSection from "@/ui/journal/insightSection";

const insights = [
  {
    title: "Call us",
    description: "Schedule a call with our staff",
    icon: (
      <svg
        className="w-10 h-10 fill-zinc-400 dark:group-hover:fill-zinc-100 group-hover:fill-zinc-900 theme-transition"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 19 18"
      >
        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
      </svg>
    ),
  },
  {
    title: "Visit us",
    description: "Schedule an appointment",
    icon: (
      <svg
        className="w-10 h-10 fill-zinc-400 dark:group-hover:fill-zinc-100 group-hover:fill-zinc-900 theme-transition"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
      </svg>
    ),
  },
  {
    title: "Write to us",
    description: "Schedule a call with our staff",
    icon: (
      <svg
        className="w-10 h-10 fill-zinc-400 dark:group-hover:fill-zinc-100 group-hover:fill-zinc-900 theme-transition"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
      </svg>
    ),
  },
  {
    title: "Share us",
    description: "Loving Ethereal Insights? Share us on your socials",
    icon: (
      <svg
        className="w-10 h-10 fill-zinc-400 dark:group-hover:fill-zinc-100 group-hover:fill-zinc-900 theme-transition"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
      </svg>
    ),
  },
  // Add more insights as needed
];

const ContactPage: React.FC = () => {
  return (
    <div className="flex my-auto">
      {/* Left Column */}
      <div className="flex-1 flex flex-col p-8 text-zinc-700 dark:text-zinc-300">
        <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4 font-medium text-base">
          Welcome to Ethereal Insights, where we believe in the power of
          technology to provide profound insights. Our mission is to bring
          clarity and understanding through innovative solutions. Reach out to
          us for any inquiries or collaborations.
        </p>
        <p className="mb-4 text-sm">
          Welcome to Ethereal Insights, where we believe in the power of
          technology to provide profound insights. Our mission is to bring
          clarity and understanding through innovative solutions. Reach out to
          us for any inquiries or collaborations.
        </p>

        <section className="mt-8">
          <InsightSection insights={insights} />
        </section>

        {/* More information, address, and social media links */}
      </div>

      {/* Right Column */}
      <div className="flex-1 items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
