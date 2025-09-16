// src/Components/ScrollItem.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollItem = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time it comes into view
    threshold: 0.2, // 20% of the element must be visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // start faded + pushed down
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollItem;
