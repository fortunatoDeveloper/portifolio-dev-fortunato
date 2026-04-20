/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import styles from "./Cards.module.css";

interface CardsProps {
  img?: string | StaticImageData;
  title: string;
  subtitle: string;
  linkButton?: string;
  stacks?: string[];
  className?: string;
}

const ProjectCards = ({ img, title, subtitle, stacks, className, linkButton }: CardsProps) => {
  return (
    <div className={`relative h-auto border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] ${className}`}>
      <img
        src={typeof img === "string" ? img : img?.src}
        alt="project-image"
        className={`${styles.imageCards} w-full h-full`}
      />
      <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2 text-primary mx-[7%] my-10">
        <span className="flex gap-2 text-[10px] font-medium rounded-md text-main-light-grey">
          {(stacks ?? []).map((stack) => (
            <Stack key={stack} title={stack} />
          ))}
        </span>

        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="text-sm text-primary opacity-90">{subtitle}</p>

        {linkButton && (
          <a href={linkButton}>
            <Button className="mt-2 px-6 py-4 text-[14px]">Ver projeto</Button>
          </a>
        )}

      </div>
    </div>
  );
};

export default ProjectCards;
