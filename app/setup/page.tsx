"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionDiv = motion.div;

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Setup() {
  return (
    <main className="px-6 py-18 max-w-content mx-auto">
      <header className="mb-12">
        <Link href="/" className="text-[var(--muted)] hover:text-blue-500 transition-colors duration-200">← Retour</Link>
      </header>

      <h1 className="text-3xl mb-8">Setup</h1>

      <div className="space-y-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Hardware</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Ordinateur :</span> MacBook Pro M1 14"
            </li>
            <li className="text-muted">
              <span className="text-text">Écran :</span> LG UltraFine 27" 4K
            </li>
            <li className="text-muted">
              <span className="text-text">Clavier :</span> Keychron K2
            </li>
            <li className="text-muted">
              <span className="text-text">Souris :</span> MX Master 3
            </li>
          </ul>
        </MotionDiv>

        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Audio</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Casque :</span> Sony WH-1000XM4
            </li>
            <li className="text-muted">
              <span className="text-text">Microphone :</span> Blue Yeti
            </li>
          </ul>
        </MotionDiv>

        <MotionDiv
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-xl mb-4">Bureau</h2>
          <ul className="space-y-4">
            <li className="text-muted">
              <span className="text-text">Bureau :</span> Bureau assis-debout IKEA BEKANT
            </li>
            <li className="text-muted">
              <span className="text-text">Chaise :</span> Herman Miller Aeron
            </li>
            <li className="text-muted">
              <span className="text-text">Éclairage :</span> BenQ ScreenBar
            </li>
          </ul>
        </MotionDiv>
      </div>
    </main>
  );
}
