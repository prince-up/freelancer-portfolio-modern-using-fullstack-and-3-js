import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-10 mx-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const allTechStack = [
    "C++", "JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", "Express", "FastAPI",
    "React Native", "MongoDB", "PostgreSQL", "Docker", "Git", "GitHub Actions", "Tailwind CSS",
    "DSA", "DBMS", "OS", "Computer Networks",
  ];

  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopy = () => {
    const text = "princeyadav76001@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md group/bento transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] flex flex-col justify-between space-y-4",
        className
      )}
    >
      {/* Mouse hover spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/bento:opacity-100 z-30"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.15), transparent 40%)`,
        }}
      />

      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center opacity-80 group-hover/bento:opacity-100 transition-opacity duration-500")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-60"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full opacity-50 transition-opacity duration-500 group-hover/bento:opacity-80"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute inset-0 z-0">
             <BackgroundGradientAnimation>
               <div className="absolute z-50 inset-0 flex items-center justify-center text-white" />
             </BackgroundGradientAnimation>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:-translate-y-1 transition duration-500 relative md:h-full min-h-40 flex flex-col px-6 p-6 lg:p-10 z-20"
          )}
        >
          <div className="font-sans font-light tracking-wide md:text-xs lg:text-sm text-sm text-purple-200 mb-2 drop-shadow-md">
            {description}
          </div>
          <div
            className={`font-sans text-xl lg:text-3xl max-w-96 font-bold tracking-tight text-white drop-shadow-lg leading-snug`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="mt-6 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max">
                <motion.div
                  className="flex gap-3 min-w-full"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                  {[...allTechStack, ...allTechStack].map((item, i) => (
                    <span
                      key={i}
                      className="py-1.5 px-4 whitespace-nowrap text-xs lg:text-sm rounded-xl text-center bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 shadow-lg hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-8 relative z-50">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-colors"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
