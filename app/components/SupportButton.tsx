"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;
const MotionA = motion.a;

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const supportLinks = [
    {
      title: "Buy Me a Coffee",
      icon: "☕",
      link: "https://www.buymeacoffee.com/yourusername"
    },
    {
      title: "Ko-fi",
      icon: "🎨",
      link: "https://ko-fi.com/yourusername"
    },
    {
      title: "PayPal",
      icon: "💳",
      link: "https://paypal.me/yourusername"
    }
  ];

  if (!isMounted) return null;

  return (
    <div 
      className="absolute top-0 right-0 sm:right-0 z-50 group/support mr-4 mt-4 sm:mr-0 sm:mt-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`text-sm px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm border border-muted/20 flex items-center group cursor-pointer hover:border-hover/40 hover:text-hover transition-all duration-200 ${isOpen ? 'border-hover/40 text-hover' : 'text-muted'}`}
      >
        <span>Me soutenir</span>
        <span className="ml-2 text-xs opacity-70">{isOpen ? '−' : '+'}</span>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden absolute top-[calc(100%+0.5rem)] right-0 w-[250px] origin-top scale-100"
          >
            <div className="bg-background/70 backdrop-blur-sm border border-muted/20 rounded-2xl shadow-lg overflow-hidden opacity-0 group-hover/support:opacity-100 transition-all duration-200 transform">
              <div className="absolute -top-1 right-6 w-2 h-2 bg-background/70 border-l border-t border-muted/20 transform rotate-45"></div>
              {supportLinks.map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MotionA
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-5 py-3 hover:bg-hover/10 hover:text-hover transition-all duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-lg opacity-70 group-hover:opacity-100">{item.icon}</span>
                    <span>{item.title}</span>
                  </MotionA>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
