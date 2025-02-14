import { useEffect } from 'react';

/**
 * Custom hook to update the document title
 * @param title - The title to set for the page
 * @param siteName - Optional site name to append to the title
 * @param format - Optional format for the title (default: '{title} | {siteName}')
 */
export const useDocumentTitle = (
  title: string, 
  siteName: string = 'Noetica',
  format: string = '{title} | {siteName}'
) => {
  useEffect(() => {
    // Previous title to restore on unmount
    const prevTitle = document.title;
    
    // Set the document title with the page title and site name
    if (!title) {
      document.title = siteName;
    } else {
      document.title = format
        .replace('{title}', title)
        .replace('{siteName}', siteName);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = prevTitle;
    };
  }, [title, siteName, format]);
};

export default useDocumentTitle; 