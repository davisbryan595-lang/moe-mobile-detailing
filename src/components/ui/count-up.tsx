import { useCallback, useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

const CountUp = ({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  const animate = useCallback(() => {
    const start = 0;
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const currentValue = start + (value - start) * eased;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [duration, value]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animate();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animate, hasAnimated]);

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

export default CountUp;
