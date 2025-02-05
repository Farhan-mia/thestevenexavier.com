"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionDiv = motion.div;

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Uses() {
  return (
    <main className="px-6 py-18 max-w-content mx-auto">
      <header className="mb-12">
        <Link href="/" className="text-[var(--muted)] hover:text-blue-500 transition-colors duration-200">← Retour</Link>
      </header>

      <h1 className="text-3xl mb-8">Uses</h1>

      <div className="space-y-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Développement</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Éditeur :</span> VS Code avec le thème GitHub Dark
            </li>
            <li className="text-muted">
              <span className="text-text">Terminal :</span> iTerm2 avec Oh My Zsh
            </li>
            <li className="text-muted">
              <span className="text-text">Police de code :</span> JetBrains Mono
            </li>
          </ul>
        </MotionDiv>

        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Design</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Design UI :</span> Figma
            </li>
            <li className="text-muted">
              <span className="text-text">Prototypage :</span> Framer
            </li>
          </ul>
        </MotionDiv>

        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Productivité</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Notes :</span> Notion
            </li>
            <li className="text-muted">
              <span className="text-text">Gestion de tâches :</span> Things
            </li>
            <li className="text-muted">
              <span className="text-text">Navigateur :</span> Arc
            </li>
          </ul>
        </MotionDiv>
      </div>
    </main>
  );
}
