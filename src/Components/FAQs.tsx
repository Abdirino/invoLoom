"use client";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "What is OutreachIQ, and how can it help my business?",
    answer:
      "OutreachIQ is an AI-powered sales automation platform designed to help businesses boost response rates and streamline their sales process. By automating repetitive tasks like email follow-ups and lead management, OutreachIQ allows you to focus on what matters most — building relationships and closing deals faster.",
  },
  {
    question: "Is OutreachIQ easy to set up and use?",
    answer:
      "Absolutely! OutreachIQ is designed with simplicity in mind. You don’t need any technical expertise to get started. Our intuitive interface, guided setup, and step-by-step tutorials ensure you can start seeing results in minutes, not hours.",
  },
  {
    question: "How secure is my data with OutreachIQ?",
    answer:
      "We prioritize your data security. OutreachIQ uses advanced encryption and complies with industry standards to protect your information. Your data is stored securely and will never be shared with third parties.",
  },
  {
    question: "Can I integrate OutreachIQ with the tools I already use?",
    answer:
      "Yes! OutreachIQ integrates seamlessly with popular CRMs, email providers, and productivity tools like Salesforce, HubSpot, and Gmail. This ensures a smooth workflow and lets you maximize your existing tech stack.",
  },
  {
    question: " What happens if I need help or run into issues?",
    answer:
      "Our dedicated support team is here for you 24/7. Whether you have questions about features, setup, or troubleshooting, you can reach us via live chat, email, or our comprehensive knowledge base for quick assistance.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {/* {isOpen ? <Minus /> : <Plus />} */}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Got Questions? We Got Answers.
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
