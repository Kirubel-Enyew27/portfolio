import { motion } from "framer-motion";

export default function Section({ id, children }) {
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
