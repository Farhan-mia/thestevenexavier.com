"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;
const MotionButton = motion.button;

export default function ExperienceButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences = [
    {
      title: "Développeur Frontend",
      period: "2023 - Présent",
      description: "Conception et développement d'interfaces utilisateur modernes et performantes."
    },
    {
      title: "Designer UI/UX",
      period: "2021 - 2023",
      description: "Création d'expériences utilisateur intuitives et esthétiques."
    },
    {
      title: "Développeur Full Stack",
      period: "2019 - 2021",
      description: "Développement d'applications web complètes avec React et Node.js."
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="relative mb-18">
      <MotionButton
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xl mb-6 flex items-center space-x-2 group hover:text-hover transition-colors duration-200 ${isOpen ? 'opacity-70' : ''}`}
      >
        <span>Expérience</span>
        <span className="text-muted group-hover:opacity-70 transition-opacity duration-200">
          {isOpen ? '−' : '+'}
        </span>
      </MotionButton>
      
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg mb-2">{experience.title}</h3>
                  <p className="text-muted mb-2">{experience.period}</p>
                  <p className="text-muted">{experience.description}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
