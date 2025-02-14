import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface TitleContextType {
  setTitle: (title: string) => void;
  resetTitle: () => void;
  defaultTitle: string;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

interface TitleProviderProps {
  children: ReactNode;
  defaultTitle?: string;
}

export const TitleProvider: React.FC<TitleProviderProps> = ({ 
  children, 
  defaultTitle = 'Noetica' 
}) => {
  const [title, setTitle] = useState<string>(defaultTitle);

  const resetTitle = () => {
    setTitle(defaultTitle);
  };

  useEffect(() => {
    // Set the document title whenever the title state changes
    document.title = title;

    // Reset on unmount
    return () => {
      document.title = defaultTitle;
    };
  }, [title, defaultTitle]);

  return (
    <TitleContext.Provider value={{ setTitle, resetTitle, defaultTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = (): TitleContextType => {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
};

export default TitleContext; 