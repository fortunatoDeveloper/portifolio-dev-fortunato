"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import profile from "@/assets/profile.jpeg";


const textVariant = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" as const },
  },
});

const Hero = () => {

  return (
    <section
      id="Hero"
      className={`${styles.bgGrid} w-full h-auto relative overflow-hidden`}
    >
      <div className={`${styles.glowCircle} top-[150px] right-[-150px]`}></div>
      <div
        className={`container ${styles.contentPosition} mx-auto mt-32 py-20 flex flex-col items-center text-center gap-10 px-4 sm:px-0`}
      >
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-4"
        >
          <Image
            width={220}
            height={220}
            className={`${styles.imageSplitShadow} absolute rounded-full border-4 border-main-light-grey/80`}
            src={profile}
            alt="profile"
          />
          <div
            className={`relative top-40 left-20 flex items-center gap-4 border-2 border-main-light-grey rounded-full bg-dark-grey px-4 py-1 ${styles.statusIndicator}`}
          >
            <span className={`${styles.dot} ${styles.pulse}`} />
            <span className="text-[0.9rem] text-gray-300">
              Vamos tirar sua ideia do papel?
            </span>
          </div>
        </motion.div>
        <div className="max-w-5xl flex flex-col gap-4 my-50">
          <motion.div
            variants={textVariant(0.4)}
            initial="hidden"
            animate="show"
          >
            <h1 className="text-6xl font-bold mb-4">
              Da ideia ao digital: criando soluções que geram{" "}
              <span className={`${styles.spanTextGradient}`}>
                resultados reais
              </span>
            </h1>
            <p className="px-30 text-primary/70 text-lg sm:px-10">
              Desenvolvedor Full Stack criando sistemas performáticos e
              interfaces otimizadas para gerar crescimento de verdade.
            </p>
          </motion.div>
          <motion.div
            variants={textVariant(0.6)}
            initial="hidden"
            animate="show"
            className="flex justify-center gap-4 mt-6"
          >
            <Button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-5"
            >
              Ver projetos ↓
            </Button>
            <a href="https://github.com/DevPlayer02">
              <Button
                appearance="secondary"
                className="inline-flex items-center gap-2 py-5 px-6"
              >
                <Image src="/github.svg" width={20} height={25} alt="github" />
                GitHub
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
