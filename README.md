# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


https://www.behindthename.com/random/ 
npm install, npm run dev 


Scope of Recreation:
I chose to recreate the name generator, including the gender selection and nation selection options

Features Implemented: 
There is a select gender card, a select nation card, and a card for how many names to generate. The site remembers what your selections were when you go back
Once you go to the generated page, you can go back using a navigation button

Technical Implementation
The site utilizes pages and navigation using routes. The hooks used are useState and useEffect

Future Improvements:
I would like to change the layout to be more modern, I based my design off of what the existing site looks like. I would also add more countries and change it so that my array is a csv that gets called, rather than loading it all in the form page. 
