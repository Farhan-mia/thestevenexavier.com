"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;
const MotionButton = motion.button;
const MotionA = motion.a;

export default function ProjectsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      title: "Portfolio Personnel",
      description: "Un site web minimaliste mettant en valeur mes projets et compétences.",
      link: "#"
    },
    {
      title: "Application Web React",
      description: "Une application moderne utilisant les dernières technologies web.",
      link: "#"
    },
    {
      title: "E-commerce NextJS",
      description: "Une plateforme de commerce électronique construite avec Next.js et Tailwind.",
      link: "#"
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="relative">
      <MotionButton
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xl mb-6 flex items-center space-x-2 group hover:text-hover transition-colors duration-200 ${isOpen ? 'opacity-70' : ''}`}
      >
        <span>Projets sélectionnés</span>
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
            <div className="space-y-8 mb-18">
              {projects.map((project, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <MotionA
                    href={project.link}
                    className="block group-hover:text-hover transition-colors duration-200"
                  >
                    <h3 className="text-lg mb-2">{project.title}</h3>
                    <p className="text-muted">{project.description}</p>
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
