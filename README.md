# Front-End Test: Login Interface

Developed by Vladyslav Dihtiarenko

## Project Description

Technologies used:

- React
- react-router-dom
- react-hook-form
- TypeScript
- Tailwind
- Vite
- ESLint/Prettier.

## Project structure

| Folder          | Description |
| :-------------  | :---------- |
| **components**  | contains all the reusable UI parts of the project, such as buttons and input fields |
| **fonts**       | all fonts that are used throughout the project |
| **hooks**       | there are three hooks for login, password reset and password set. It helps to separate the UI part from async actions (logic). Basically, I built my own hooks on top of the useForm() hook from react-hook-form library. |
| **lib** | Contains reusable logic. Currently, I store validation rules for the inputs in our forms in this folder. |
| **pages** | UI components to render as routes (pages) with react-router-dom |

## How to run this project locally?

```bash 
git init
git pull (link to repo)
npm i && npm run dev
```

### To build a project
```bash
npm run build && npm run preview
```