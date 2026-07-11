'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export interface UseNavbarReturn {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}

const useNavbar = (threshold: number = 40): UseNavbarReturn => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrolled, mobileOpen, setMobileOpen };
};

export default useNavbar;
