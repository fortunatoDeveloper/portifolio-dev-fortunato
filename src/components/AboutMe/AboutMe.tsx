"use client";

import ServicesCards from "../Cards/ServicesCard";
import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";
import styles from "./AboutMe.module.css";
import profile from "@/assets/profile.jpeg";

const cardTransition: Transition = {
  duration: 0.6,
  ease: [0.6, 0.01, 0.05, 0.9],
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

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" as const },
  },
});

const AboutMe = () => {
  return (
    <section className="w-full h-auto mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="max-w-7xl mx-auto py-30"
      >
        <ServicesCards className="p-20 h-[650px]">
          <motion.div
            variants={cardVariant}
            className="grid grid-cols-[35%_60%] gap-20 mb-4"
          >
            <motion.div
              variants={textVariant(0.2)}
              initial="hidden"
              animate="show"
            >
              <Image
                width={500}
                height={500}
                className={`${styles.imageSplitShadow} mt-15 border-4 border-main-light-grey/80 mr-8`}
                src={profile}
                alt="profile"
              />
            </motion.div>
            <motion.div
              variants={textVariant(0.6)}
              initial="hidden"
              animate="show"
            >
              <h1 className="text-center text-3xl font-bold text-primary mb-10">
                Prazer me chamo Giovani Chaves Fortunato...
              </h1>
              <p className="text-center text-secondary text-2xl opacity-90 mt-4 mb-10">
                Formado em Engenharia de Software pela DNC, atuo com
                desenvolvimento web e segurança da informação, unindo visão
                técnica, capacidade de execução e foco em entrega. Tenho
                experiência com front-end, back-end e bancos de dados,
                utilizando tecnologias como React, Next.js, NestJS, Express,
                TypeScript, Tailwind, Bootstrap, TypeORM, Prisma, PostgreSQL,
                MySQL, MariaDB e MongoDB. Também desenvolvi ferramentas de
                pentest em C, Python e PowerShell, o que reforça minha base
                prática, perfil analítico e capacidade de adaptação a diferentes
                contextos técnicos.
              </p>
            </motion.div>
          </motion.div>
        </ServicesCards>
      </motion.div>
    </section>
  );
};

export default AboutMe;
