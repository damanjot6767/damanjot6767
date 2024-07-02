import { useState, useEffect } from 'react';

function useScrollHook() {
  const [scrolled, setScrolled] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'}) 
 }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {scrolled, handleScrollToTop};
}

export default useScrollHook;
