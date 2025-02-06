# E-Commerce Project

A modern e-commerce web application built with React, TypeScript, and Tailwind CSS. Features a clean and responsive design with components for Best Sellers, Categories, Flash Sales, and New Arrivals.

## Demo

**Live Preview:** [View Demo](https://e-commerce-hh-bobur.netlify.app/)

## Features

- **Modern UI/UX** - Clean and responsive design
- **Product Categories** - Browse products by categories
- **Flash Sales** - Time-limited special offers
- **Best Sellers** - Top selling products section
- **New Arrivals** - Latest products showcase
- **Vite** for blazing fast development
- **React 18** for building user interfaces
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **ESLint** for code quality

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   https://github.com/boburshokhh/e-commerce-hh.git
   cd e-commerce-hh
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- **`npm run dev`**  
  Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

- **`npm run build`**  
  Builds the app for production to the `dist` folder.

- **`npm run preview`**  
  Serves the production build locally for previewing.

- **`npm run lint`**  
  Runs ESLint to analyze the code for potential issues.

## Project Structure

```
root/
├── .vscode/                    # VSCode configuration / Конфигурация VSCode
│   └── settings.json
├── public/                     # Static assets / Статические файлы
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       └── images/
├── src/                        # Source files / Исходные файлы
│   ├── components/             # React components / React компоненты
│   │   ├── Header.tsx
│   │   ├── BestSellers.tsx
│   │   ├── Categories.tsx
│   │   ├── FlashSale.tsx
│   │   ├── NewArrival.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                # Reusable UI components / Переиспользуемые UI компоненты
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── layouts/               # Layout components / Компоненты макетов
│   │   └── MainLayout.tsx
│   ├── pages/                 # Page components / Компоненты страниц
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── hooks/                 # Custom React hooks / Пользовательские хуки
│   │   └── useWindowSize.ts
│   ├── utils/                 # Utility functions / Вспомогательные функции
│   │   └── helpers.ts
│   ├── styles/                # Styles / Стили
│   │   ├── globals.css
│   │   └── components/
│   ├── types/                 # TypeScript types / Типы TypeScript
│   │   └── index.ts
│   ├── data.ts               # Data file / Файл с данными
│   ├── App.tsx               # Main App component / Главный компонент
│   ├── main.tsx             # Entry point / Точка входа
│   └── vite-env.d.ts        # Vite environment types / Типы окружения Vite
├── .gitignore                # Git ignore file / Файл игнорирования Git
├── .eslintrc.json           # ESLint configuration / Конфигурация ESLint
├── .prettierrc              # Prettier configuration / Конфигурация Prettier
├── postcss.config.js        # PostCSS configuration / Конфигурация PostCSS
├── tailwind.config.js       # Tailwind configuration / Конфигурация Tailwind
├── tsconfig.json            # TypeScript configuration / Конфигурация TypeScript
├── vite.config.ts           # Vite configuration / Конфигурация Vite
├── package.json             # Project metadata and dependencies / Метаданные и зависимости
├── package-lock.json        # Locked dependencies / Зафиксированные зависимости
├── README.md                # Project documentation / Документация проекта
└── LICENSE                  # License file / Файл лицензии
```

### Key Directories and Files / Ключевые директории и файлы:

- `public/` - Static files that will be served directly / Статические файлы, которые будут напрямую обслуживаться
- `src/` - Source code / Исходный код
  - `components/` - Reusable React components / Переиспользуемые React компоненты
  - `layouts/` - Layout components / Компоненты макетов
  - `pages/` - Page components / Компоненты страниц
  - `hooks/` - Custom React hooks / Пользовательские React хуки
  - `utils/` - Helper functions and utilities / Вспомогательные функции
  - `styles/` - CSS and style related files / CSS и файлы стилей
  - `types/` - TypeScript type definitions / Определения типов TypeScript
- `vite.config.ts` - Vite configuration / Конфигурация Vite
- `tailwind.config.js` - Tailwind CSS configuration / Конфигурация Tailwind CSS
- `tsconfig.json` - TypeScript configuration / Конфигурация TypeScript

### Additional Configuration Files / Дополнительные файлы конфигурации:

- `.eslintrc.json` - ESLint rules and settings / Правила и настройки ESLint
- `.prettierrc` - Code formatting rules / Правила форматирования кода
- `postcss.config.js` - PostCSS plugins configuration / Конфигурация плагинов PostCSS

## Customization

- **Tailwind CSS**: Modify `tailwind.config.js` to customize the design system.
- **ESLint**: Adjust `.eslintrc.json` to modify linting rules according to your coding style.
- **Vite**: Update `vite.config.ts` for custom Vite configurations.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons Documentation](https://lucide.dev/)

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🚀

