# Coding Conf Component Library

## Overview
This project is a custom component library and registration system for Coding Conf 2025, built with React and TypeScript.

## Project Structure
```
src/
├── components/
│   ├── Avatar/
│   ├── Button/
│   ├── InputField/
│   ├── Layout/
│   └── TicketCard/
├── pages/
│   ├── RegistrationPage.tsx
│   └── ConfirmationPage.tsx
├── styles/
│   ├── global.css
│   └── theme.ts
└── utils/
    └── validation.ts
```

## Components
### Button
- Customizable button with primary and secondary variants
- Supports full-width option
- Fully typed with TypeScript

### Avatar
- Drag and drop file upload
- Image preview
- File type and size validation

### InputField
- Supports labels and error messages
- Fully typed with TypeScript
- Flexible styling via CSS modules

### TicketCard
- Displays conference ticket information
- Supports custom avatar
- Responsive design

### Layout
- Provides consistent background and styling
- Responsive container

## Installation

1. Clone the repository
```bash
git clone https://github.com/sparshspradhan/coding-conf-component-library.git
cd coding-conf-component-library
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Usage

### Using Components
```tsx
import Button from './components/Button/Button';
import Avatar from './components/Avatar/Avatar';
import InputField from './components/InputField/InputField';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Avatar onFileSelect={handleFileUpload} />
      <InputField 
        label="Email" 
        placeholder="Enter your email"
      />
    </div>
  );
}
```

## Live Vercel Deployment Link- https://wasserstoff-front-end-intern-task2-sparsh.vercel.app/


## Constraints
- No external UI libraries
- TypeScript
- Modular and reusable components
- Responsive design
- Accessibility considerations
