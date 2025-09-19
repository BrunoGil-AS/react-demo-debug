# React Demo Debug

This project is a demonstration of basic and elementary features and concepts of React. It serves as a learning tool and a starting point for building more complex React applications.

## Features

- **React:** The core library for building user interfaces.
- **React Router:** For handling client-side routing and navigation.
- **Styled Components:** For styling React components.
- **Vite:** A fast build tool for modern web development.
- **ESLint:** For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Project Structure

```mermaid
flowchart TD
    %% Runtime Browser Layer
    subgraph "Runtime Browser Layer"
        MAIN["src/main.jsx<br/>Entry Point"]:::runtime
        APP["src/App.jsx<br/>Root Component"]:::runtime
        subgraph "Global App Styles"
            INDEXCSS["src/index.css<br/>Global Styles"]:::runtime
            APPCSS["src/App.css<br/>Root Styles"]:::runtime
            COLORS["src/styles/colors.js<br/>Color Constants"]:::runtime
        end
        subgraph "Context Providers & Hooks"
            COUNTPROV["CountProvider<br/>Context Provider"]:::runtime
            COUNTHOOK["useCount<br/>Custom Hook"]:::runtime
            NOTESPROV["NotesProvider<br/>Context Provider"]:::runtime
            NOTESHOOK["useNotesContext<br/>Custom Hook"]:::runtime
        end

        subgraph "UI Components"
            NAV["Nav<br/>Component"]:::runtime
            DASH["Dashboard<br/>Component"]:::runtime
            NOTES["NotesContainer<br/>Component"]:::runtime
            NEWNOTE["NewNoteCard<br/>Component"]:::runtime
            NOTELIST["NoteList<br/>Component"]:::runtime
            NOTE["Note<br/>Component"]:::runtime
            BOX["Box<br/>Component"]:::runtime
            ERRWRAP["withErrorBoundary<br/>HOC"]:::runtime
            ERRCOMP["ErrorBoundary<br/>Component"]:::runtime
        end
    end

    %% Connections
    MAIN -->|imports| INDEXCSS
    MAIN -->|mounts App| APP

    APP -->|imports| APPCSS
    APP -->|imports| COLORS
    APP -->|wraps with| COUNTPROV
    APP -->|wraps with| NOTESPROV

    COUNTPROV -->|uses| COUNTHOOK
    NOTESPROV -->|uses| NOTESHOOK

    APP -->|renders| NAV
    APP -->|renders| DASH
    APP -->|renders| NOTES
    APP -->|renders| BOX
    APP -->|wraps| ERRWRAP
    ERRWRAP --> ERRCOMP

    NOTES --> NEWNOTE
    NOTES --> NOTELIST
    NOTELIST --> NOTE

    %% Click Events (still point to full paths for reference)
    click MAIN "https://github.com/brunogil-as/react-demo-debug/blob/master/src/main.jsx"
    click INDEXCSS "https://github.com/brunogil-as/react-demo-debug/blob/master/src/index.css"
    click APP "https://github.com/brunogil-as/react-demo-debug/blob/master/src/App.jsx"
    click APPCSS "https://github.com/brunogil-as/react-demo-debug/blob/master/src/App.css"
    click COLORS "https://github.com/brunogil-as/react-demo-debug/blob/master/src/styles/colors.js"
    click COUNTPROV "https://github.com/brunogil-as/react-demo-debug/blob/master/src/context/Counter/CountProvider.jsx"
    click COUNTHOOK "https://github.com/brunogil-as/react-demo-debug/blob/master/src/context/Counter/useCount.js"
    click NOTESPROV "https://github.com/brunogil-as/react-demo-debug/blob/master/src/context/Notes/NotesProvider.jsx"
    click NOTESHOOK "https://github.com/brunogil-as/react-demo-debug/blob/master/src/context/Notes/useNotesContext.js"
    click NAV "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Nav/Nav.jsx"
    click DASH "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Dashboard/Dashboard.jsx"
    click NOTES "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Notes/Notes.jsx"
    click NEWNOTE "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Notes/NewNoteCard.jsx"
    click NOTELIST "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Notes/NoteList.jsx"
    click NOTE "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Notes/Note.js"
    click BOX "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/Box/Box.jsx"
    click ERRWRAP "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/ErrorBoundary/withErrorBoundary.jsx"
    click ERRCOMP "https://github.com/brunogil-as/react-demo-debug/blob/master/src/components/ErrorBoundary/ErrorBoundary.jsx"

    %% Styles
    classDef runtime fill:#e2f7e1,stroke:#2ca02c,color:#000
```

The project is structured as follows:

```
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public
│   └── vite.svg
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets
    │   └── react.svg
    ├── components
    │   ├── Box
    │   ├── Dashboard
    │   ├── ErrorBoundary
    │   ├── Nav
    │   └── Notes
    ├── context
    │   ├── Counter
    │   └── Notes
    └── styles
        └── colors.js
```

### `src` Directory

- **`main.jsx`**: The entry point of the application. It renders the `App` component into the DOM.
- **`App.jsx`**: The main application component. It sets up the routing and context providers.
- **`components`**: Contains reusable UI components.
  - **`Box`**: A simple component that demonstrates basic state management.
  - **`Dashboard`**: The main dashboard of the application.
  - **`ErrorBoundary`**: A component that catches JavaScript errors anywhere in its child component tree.
  - **`Nav`**: The navigation bar of the application.
  - **`Notes`**: A component for creating and managing notes.
- **`context`**: Contains React context providers for managing global state.
  - **`Counter`**: A context for managing a simple counter.
  - **`Notes`**: A context for managing the notes.
- **`styles`**: Contains global styles and color definitions.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint`

Lints the project files using ESLint.

### `npm run preview`

Serves the production build locally for previewing.

## Debugging

This project is configured with source maps to help with debugging. This means that you can set breakpoints and inspect the original source code in your browser's developer tools, even though the code is minified and bundled for production.
