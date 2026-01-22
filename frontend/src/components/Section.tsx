import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children?: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-[80px]"
    >
      {children}
    </motion.section>
  );
}
