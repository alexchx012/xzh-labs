import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** 单张图片可以是纯路径字符串，也可以是带配置的对象 */
export type CarouselImage = string | { src: string; fit?: 'cover' | 'contain' };

/** 统一取 src */
const getSrc = (img: CarouselImage) => (typeof img === 'string' ? img : img.src);
/** 统一取 fit，默认 cover */
const getFit = (img: CarouselImage): 'cover' | 'contain' =>
  typeof img === 'string' ? 'cover' : (img.fit ?? 'cover');

interface ImageCarouselProps {
  images: CarouselImage[];
  /** 自动轮播间隔（毫秒），0 则不自动播放 */
  interval?: number;
  /** 容器额外 className */
  className?: string;
  /** 圆角样式 */
  rounded?: string;
}

const ImageCarousel = ({
  images,
  interval = 4000,
  className = '',
  rounded = 'rounded-xl',
}: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  const count = images.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + count) % count);
  }, [count]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStart.current !== null) {
      touchDelta.current = e.touches[0].clientX - touchStart.current;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    if (Math.abs(touchDelta.current) > 50) {
      if (touchDelta.current < 0) next();
      else prev();
    }
    touchStart.current = null;
    touchDelta.current = 0;
  }, [next, prev]);

  // 自动轮播
  useEffect(() => {
    if (interval <= 0 || count <= 1 || isHovered) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval, count, next, isHovered]);

  if (count === 0) {
    return (
      <div
        className={`relative w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${rounded} ${className}`}
      >
        <span className="text-5xl">🚀</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden ${rounded} ${className} group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* 图片层 - only render current and adjacent slides */}
      {images.map((img, i) => {
        // Only render slides within 1 position of current
        const distance = Math.min(Math.abs(i - current), count - Math.abs(i - current));
        if (distance > 1) return null;
        const src = getSrc(img);
        const fit = getFit(img);
        return (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            } ${fit === 'contain' ? 'bg-white' : ''}`}
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className={`w-full h-full ${
                fit === 'contain' ? 'object-contain' : 'object-cover'
              }`}
              loading="lazy"
              draggable={false}
            />
          </div>
        );
      })}

      {/* 左右箭头 - 仅多张图片且 hover 时显示 */}
      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* 底部圆点指示器 */}
      {count > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

