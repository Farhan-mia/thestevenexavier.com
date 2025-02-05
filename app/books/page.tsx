"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionDiv = motion.div;

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Books() {
  return (
    <main className="px-6 py-18 max-w-content mx-auto">
      <header className="mb-12">
        <Link href="/" className="text-[var(--muted)] hover:text-blue-500 transition-colors duration-200">← Retour</Link>
      </header>

      <h1 className="text-3xl mb-8">Livres</h1>

      <div className="space-y-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Développement</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Clean Code</span> par Robert C. Martin
            </li>
            <li className="text-muted">
              <span className="text-text">Eloquent JavaScript</span> par Marijn Haverbeke
            </li>
            <li className="text-muted">
              <span className="text-text">You Don't Know JS</span> par Kyle Simpson
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
              <span className="text-text">Refactoring UI</span> par Adam Wathan & Steve Schoger
            </li>
            <li className="text-muted">
              <span className="text-text">Design of Everyday Things</span> par Don Norman
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
              <span className="text-text">Deep Work</span> par Cal Newport
            </li>
            <li className="text-muted">
              <span className="text-text">Atomic Habits</span> par James Clear
            </li>
          </ul>
        </MotionDiv>
      </div>
    </main>
  );
}
