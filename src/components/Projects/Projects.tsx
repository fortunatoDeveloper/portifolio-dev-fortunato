"use client";
import ProjectCards from "../Cards/ProjectsCards";
import { motion } from "framer-motion";
import { projects } from "@/data/projects"

const Projects = () => {
  return (
    <section id="projects" className="w-full h-auto">
      <div className="max-w-7xl mx-auto py-30">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl text-center font-bold text-primary">
            Trabalhos em Destaque
          </h2>
          <p className="text-center text-primary/70 text-lg">
            Soluções digitais criadas para superar obstáculos e entregar valor
            de verdade.
          </p>
        </motion.div>
        <div className="grid gap-15 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="sm:mx-10"
          >
            {projects.map((p: typeof projects[number], i: number) => (
              <ProjectCards key={i} {...p} />
            ))}
          </motion.div>
        </div>
        <div className="relative w-full">
          <hr className="absolute left-1/2 -translate-x-1/2 w-screen h-[2px] bg-main-light-grey border-none mt-40" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
