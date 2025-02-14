import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the navbar or top as a fallback
const scrollToNavbar = (behavior: ScrollBehavior = 'smooth') => {
  const performScroll = () => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior });
    } else {
      // Fallback: scroll to top if navbar not found
      window.scrollTo({ top: 0, behavior });
    }
  };

  if (behavior === 'instant') {
    performScroll(); // Execute immediately for instant behavior
  } else {
    // Use setTimeout only for smooth scrolling to ensure element is rendered
    setTimeout(performScroll, 50);
  }
};

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  // Ref to track if navigation was triggered by an internal link click
  const internalNavigationTriggered = useRef(false);

  // Effect runs whenever the pathname changes (i.e., navigation occurs)
  useEffect(() => {
    // Check if the navigation was triggered by our click handler
    if (internalNavigationTriggered.current) {
      // If yes, scroll to the navbar instantly
      scrollToNavbar('instant');
      // Reset the flag for the next navigation
      internalNavigationTriggered.current = false;
    } else {
      // If no (e.g., direct URL, refresh, back/forward), scroll to the absolute top instantly
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);


  // Effect to add click listener to track internal navigation attempts
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor) {
        const href = anchor.getAttribute('href');
        const targetAttr = anchor.getAttribute('target');

        // Check if it's a link that likely triggers internal navigation or is a hash link
        if (href && (href.startsWith('/') || href.startsWith('#')) && targetAttr !== '_blank') {
          // Handle hash links separately - scroll smoothly to the element
          if (href.startsWith('#') && href.length > 1) {
            const elementId = href.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
              // Scroll smoothly to the element after a delay
              setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 50);
            }
            // Don't set the internalNavigationTriggered flag for hash links.
            return; // Stop processing for hash links
          }

          // Handle internal page links (/path)
          if (href.startsWith('/')) {
             // Set the flag indicating the *next* navigation (triggered by this click) is internal
            internalNavigationTriggered.current = true;
            // Scrolling is handled by the useEffect reacting to pathname change.
          }
        }
      }
    };

    // Use 'click' event for link activation
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // Runs once on mount

  return null; // This component doesn't render anything
};

export default ScrollToTop; 