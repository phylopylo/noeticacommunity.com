# Noetica React Project

This project is a web application built with React, TypeScript, and Vite. Built by Philip Roberts.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:phylopylo/noetica-react.git
    cd noetica-react
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Or:
    ```bash
    yarn dev
    ```
    The application will typically be available at `http://localhost:5173` (or another port specified by Vite).

## How to link to static files

Static assets (images, fonts, manifests, etc.) should be placed in the `public` directory at the root of the project. Vite serves these files directly from the root path (`/`).

For example, if you place an image at `public/images/logo.png`, you can reference it in your components or CSS like this:

```jsx
<img src="/images/logo.png" alt="Logo" />
```

Or in CSS:

```css
.background-logo {
  background-image: url('/images/logo.png');
}
```

Files in the `public` directory are copied to the root of the `dist` directory during the build process without being processed by Vite's build pipeline.

## Technical Details

*   **Framework/Library:** React 19
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (with PostCSS and Autoprefixer)
*   **Routing:** React Router DOM
*   **Content Rendering:**
    *   `react-markdown` with `remark-gfm` for GitHub Flavored Markdown.
    *   `rehype-raw`, `rehype-sanitize`, `rehype-slug` for HTML processing within Markdown.
    *   Potentially `pdfjs-dist` for PDF handling.
*   **State Management/Utilities:**
    *   `use-shopping-cart` (Suggests e-commerce features)
    *   `front-matter` for parsing metadata from files.
*   **Linting/Formatting:** ESLint configured via `config/eslint.config.js`.
*   **Icons:** Font Awesome, React Icons
*   **Project Structure:**
    *   `src/`: Contains the main application source code (components, pages, utils, etc.).
    *   `public/`: Holds static assets served directly.
    *   `config/`: Contains configuration files for Vite, TypeScript, and ESLint.
    *   `index.html`: The main HTML entry point.
    *   `package.json`: Lists dependencies and scripts.
