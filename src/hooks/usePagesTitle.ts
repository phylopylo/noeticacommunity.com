import { useEffect } from 'react';
import { useTitle } from '../contexts/TitleContext';
import useDocumentTitle from './useDocumentTitle';

/**
 * Combined hook that uses both the useDocumentTitle hook and 
 * the new TitleContext for setting page titles.
 * This provides backward compatibility while transitioning
 * to the context-based approach.
 * 
 * @param title The page title without the site name
 * @param siteName Optional site name to append (defaults to 'Noetica')
 */
export const usePagesTitle = (title: string, siteName: string = 'Noetica') => {
  // Keep using the original hook for compatibility
  useDocumentTitle(title, siteName);
  
  // Also use the new context approach
  const { setTitle } = useTitle();
  
  useEffect(() => {
    const formattedTitle = title ? `${title} | ${siteName}` : siteName;
    setTitle(formattedTitle);
    
    // No need for cleanup as TitleContext handles it
  }, [title, siteName, setTitle]);
};

export default usePagesTitle; 