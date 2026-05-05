import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollFadeSection = ({ children, className = '' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 1', 'start 0.5'],
  });

  // 终点 stop 提前到 0.85，让页面最末节也能稳定到达 opacity=1
  const rawOpacity = useTransform(scrollYProgress, [0, 0.33, 0.85], [0, 0, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.33, 0.85], [20, 20, 0]);

  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30 });
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollFadeSection;
