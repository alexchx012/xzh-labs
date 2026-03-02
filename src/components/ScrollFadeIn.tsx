import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right' | 'none';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  scale?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

const ScrollFadeIn = ({ children, className = '', delay = 0, direction = 'up', scale = false }: Props) => {
  const reduced = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, x: offset.x, y: offset.y, scale: scale ? 1.05 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
