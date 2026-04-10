import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', duration = 800, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getDirectionTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0, 0, 1) ${delay}ms`,
    willChange: 'opacity, transform'
  };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
