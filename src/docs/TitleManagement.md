# Title Management in Noetica

This document describes how page titles are managed in the Noetica application.

## Overview

The application uses three approaches to manage document titles, providing both flexibility and backward compatibility:

1. **useDocumentTitle Hook** - A simple hook-based approach
2. **TitleContext Provider** - A context-based approach for more centralized control
3. **usePagesTitle Hook** - A combined approach that uses both methods

## Usage

### Basic Usage (Recommended)

For most pages, use the `usePagesTitle` hook:

```tsx
import usePagesTitle from '../hooks/usePagesTitle';

const MyPage = () => {
  usePagesTitle('Page Name');
  
  return (
    // ...your component
  );
};
```

### Advanced Usage

For components that need more control over the title:

```tsx
import { useTitle } from '../contexts/TitleContext';
import { useEffect } from 'react';

const ComplexPage = () => {
  const { setTitle, resetTitle } = useTitle();
  
  useEffect(() => {
    // Set a dynamic title
    setTitle(`Dynamic Title - ${someValue}`);
    
    return () => {
      // Automatically resets to default title (Noetica)
    };
  }, [setTitle, someValue]);
  
  return (
    // ...your component
  );
};
```

### Legacy Method

The original `useDocumentTitle` hook is still available for backward compatibility:

```tsx
import useDocumentTitle from '../hooks/useDocumentTitle';

const LegacyPage = () => {
  useDocumentTitle('Page Title');
  
  return (
    // ...your component
  );
};
```

## How It Works

1. The `TitleProvider` wraps the entire application in `App.tsx`, providing a global title management context.
2. Each page uses either `usePagesTitle` (recommended) or the other methods to set its title.
3. When a user navigates away from a page, the title is automatically reset.
4. The default title fallback is "Noetica".

## Format

Titles follow the format: `{PageName} | Noetica`

This can be customized by providing a format parameter to `useDocumentTitle` or by modifying the `usePagesTitle` implementation. 