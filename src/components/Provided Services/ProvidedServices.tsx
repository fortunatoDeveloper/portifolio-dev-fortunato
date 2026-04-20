"use client";

import ServicesCards from "../Cards/ServicesCard";
import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";

const cardTransition: Transition = {
  duration: 0.6,
  ease: [0.6, 0.01, 0.05 , 0.9],
};

const containerVariants: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: cardTransition },
};

const listVariant: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ProvidedServices = () => {
  console.log("ProvidedServices render");

  const items = [
    "Front-end moderno e UI/UX responsivo.",
    "E-commerce, CMS e Sistemas sob medida.",
    "Performance e SEO técnico otimizado.",
    "Back-end escalável e integrações APIs.",
    "Resolução de bugs",
    "Migração de sistema legado",
  ];

  return (
    <section className="w-full h-auto mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="max-w-7xl mx-auto py-30"
      >
        <ServicesCards className="p-20 flex flex-col sm:p-10 sm:h-auto sm:mx-10">
          <motion.div variants={cardVariant} className="mb-4">
            <h2 className="text-center text-3xl font-bold text-primary">
              Soluções para impulsionar o seu negócio
            </h2>
            <p className="text-center text-secondary opacity-90 mt-4">
              Soluções digitais completas, da arquitetura de banco de dados ao
              design de interface.
            </p>
          </motion.div>

          <motion.ul
            variants={listVariant}
            className="text-secondary opacity-90 p-10 grid grid-cols-3 gap-20 list-none mt-6 sm:grid-cols-1 md:grid-cols-2"
          >
            {items.map((text, i) => (
              <motion.li
                key={i}
                variants={itemVariant}
                className="inline-flex items-center gap-4"
              >
                <Image src="/mark.svg" alt="mark-services" width={24} height={24} />
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </ServicesCards>
        <div className="relative w-full">
          <hr className="absolute left-1/2 -translate-x-1/2 w-screen h-0.5 bg-main-light-grey border-none mt-20" />
        </div>
      </motion.div>
    </section>
  );
};

export default ProvidedServices;
