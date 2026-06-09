import { Boxes, Bug, Code2, Database, GitBranch, Layers3, Mail, Network, Palette, Route, Send, Sparkles } from "lucide-react";
import { Gem, Lightbulb, Rocket } from "lucide-react";
import type { ExperienceItem, Language, Project, ProjectCategory, Skill, SkillGroup, SocialLink, ValueCard } from "@/types/content";

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
const githubUrl = "https://github.com/Chuppy101";
const telegramUrl = "https://t.me/Chubby_Alex";
const email = "a_chubchik@mail.ru";

export const sectionIds = ["home", "projects", "experience", "skills", "why-hire-me", "contact"] as const;

const commonProfile = {
  name: "Alex Chub",
  email,
  resumeUrl,
  githubUrl,
  telegramUrl,
};

const skills: Skill[] = [
  { name: "React", group: "Core", icon: Sparkles, accent: "cyan" },
  { name: "TypeScript", group: "Core", icon: Code2, accent: "blue" },
  { name: "JavaScript", group: "Core", icon: Code2, accent: "lime" },
  { name: "Redux Toolkit", group: "State", icon: Layers3, accent: "violet" },
  { name: "Zustand", group: "State", icon: Boxes, accent: "lime" },
  { name: "REST API", group: "Integration", icon: Network, accent: "cyan" },
  { name: "Axios / Fetch", group: "Integration", icon: Route, accent: "blue" },
  { name: "Tailwind CSS", group: "Styling", icon: Palette, accent: "cyan" },
  { name: "SCSS", group: "Styling", icon: Palette, accent: "violet" },
  { name: "Vite", group: "Tooling", icon: Sparkles, accent: "lime" },
  { name: "Storybook", group: "Tooling", icon: Boxes, accent: "violet" },
  { name: "GitHub Actions", group: "Tooling", icon: GitBranch, accent: "blue" },
  { name: "Vitest", group: "Testing", icon: Bug, accent: "lime" },
  { name: "Jest", group: "Testing", icon: Bug, accent: "cyan" },
  { name: "Cypress", group: "Testing", icon: Bug, accent: "violet" },
  { name: "Node.js", group: "Backend", icon: Database, accent: "lime" },
  { name: "Express", group: "Backend", icon: Database, accent: "blue" },
  { name: "Strapi", group: "Backend", icon: Database, accent: "violet" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: githubUrl, icon: GitBranch },
  { label: "Telegram", href: telegramUrl, icon: Send },
  { label: "Email", href: `mailto:${email}`, icon: Mail },
];

const projectCategories: ProjectCategory[] = ["All", "React", "TypeScript", "Fullstack", "UI", "API", "Infrastructure"];

export const localizedContent = {
  ru: {
    profile: {
      ...commonProfile,
      fullName: "Александр Чубчик",
      role: "Frontend Developer",
      subtitle: "React / TypeScript / Product Interfaces",
      location: "Санкт-Петербург / Remote",
      pitch:
        "Я создаю SPA-интерфейсы, работаю с бизнес-логикой клиентской части, интегрирую REST API, улучшаю инфраструктуру проектов и делаю UI, которым удобно пользоваться.",
      experienceLabel: "3+ года коммерческого опыта",
      availability: "Открыт к frontend позициям, удаленной работе и продуктовым командам.",
    },
    navItems: [
      { id: "home", label: "Главная" },
      { id: "projects", label: "Проекты" },
      { id: "experience", label: "Опыт" },
      { id: "skills", label: "Навыки" },
      { id: "why-hire-me", label: "Почему я" },
      { id: "contact", label: "Контакты" },
    ],
    socialLinks,
    valueCards: [
      {
        title: "Product thinking",
        text: "Я думаю о сценарии пользователя, бизнес-цели и понятном результате для продукта.",
        icon: Lightbulb,
        accent: "cyan",
      },
      {
        title: "UI quality",
        text: "Я умею собирать аккуратные адаптивные интерфейсы: от резиновой верстки и сложных форм до таблиц, карточек и модальных сценариев.",
        icon: Gem,
        accent: "violet",
      },
      {
        title: "Infrastructure mindset",
        text: "Я умею работать со Storybook, тестами, CI, линтерами, конфигами и обновлением зависимостей.",
        icon: Boxes,
        accent: "lime",
      },
      {
        title: "Ownership",
        text: "Я могу взять задачу целиком: уточнить требования, собрать UI, интегрировать API и проверить edge cases.",
        icon: Rocket,
        accent: "blue",
      },
    ] satisfies ValueCard[],
    projectCategories,
    projectCategoryLabels: {
      All: "Все",
      React: "React",
      TypeScript: "TypeScript",
      Fullstack: "Fullstack",
      UI: "UI",
      API: "API",
      Infrastructure: "Infrastructure",
    } satisfies Record<ProjectCategory, string>,
    projects: [
      {
        id: "admin-dashboard",
        title: "Admin-Dashboard",
        description: "SPA admin dashboard с формами, CRUD-сценариями и управлением данными.",
        caseSummary: "Административный интерфейс с визуализацией данных, таблицами и формами для рабочих сценариев.",
        role: "Frontend Developer",
        problem: "Нужно было собрать понятный dashboard, где пользователь быстро видит ключевые метрики и управляет сущностями.",
        solution: [
          "Собрал структуру страниц и reusable UI-блоки для карточек, таблиц и форм.",
          "Разделил данные, отображение и интерактивные состояния.",
          "Сделал адаптивную сетку и аккуратные состояния интерфейса.",
        ],
        result: "Проект показывает навыки работы с SPA, dashboard UI, формами и продуктовой логикой.",
        stack: ["React", "TypeScript", "Charts", "Forms"],
        categories: ["React", "TypeScript", "UI"],
        githubUrl: "https://github.com/Chuppy101/Admin-Dashboard",
        accent: "cyan",
        preview: "dashboard",
      },
      {
        id: "ecommerce-photo",
        title: "Ecommerce-photo",
        description: "E-commerce сайт с корзиной, фильтрами и CMS Strapi.",
        caseSummary: "Интернет-магазин фототехники с каталогом, карточками товара, корзиной и интеграцией CMS.",
        role: "Frontend / Fullstack Developer",
        problem: "Нужно было соединить удобный каталог, фильтрацию и управление контентом через backend CMS.",
        solution: [
          "Реализовал каталог товаров, категории, поиск, корзину и страницы товара.",
          "Интегрировал frontend с Strapi и API-слоем.",
          "Сделал responsive UI для основных сценариев покупки.",
        ],
        result: "Проект демонстрирует fullstack-подход, работу с API и e-commerce логикой.",
        stack: ["React", "TypeScript", "Strapi", "REST API"],
        categories: ["React", "TypeScript", "Fullstack", "API", "Infrastructure"],
        githubUrl: "https://github.com/Chuppy101/Ecommerce-photo",
        accent: "violet",
        preview: "shop",
      },
      {
        id: "car-renter",
        title: "Car-Renter",
        description: "Платформа аренды автомобилей с адаптивным UI и интеграцией платежей.",
        caseSummary: "Сервис подбора автомобилей с поиском, фильтрами, карточками и модальными деталями.",
        role: "Frontend Developer",
        problem: "Нужно было сделать быстрый и понятный интерфейс для просмотра и выбора автомобилей.",
        solution: [
          "Собрал hero, search flow, фильтры и карточки автомобилей.",
          "Продумал responsive layout для desktop и mobile.",
          "Вынес контент и UI-состояния в понятную структуру компонентов.",
        ],
        result: "Проект показывает работу с фильтрами, карточками, модальными окнами и адаптивом.",
        stack: ["React", "TypeScript", "Next.js", "Tailwind"],
        categories: ["React", "TypeScript", "UI", "API"],
        githubUrl: "https://github.com/Chuppy101/Car-Renter",
        accent: "blue",
        preview: "cars",
      },
      {
        id: "todo-calendar",
        title: "Todo_Calendar",
        description: "Календарь задач с несколькими представлениями и сложной UI-логикой.",
        caseSummary: "Планировщик задач с календарной сеткой, профилями, формами и локальным состоянием.",
        role: "Frontend Developer",
        problem: "Нужно было удобно управлять задачами, датами и несколькими состояниями интерфейса.",
        solution: [
          "Реализовал календарную сетку, модальные окна и формы задач.",
          "Использовал Context + useReducer для предсказуемой логики.",
          "Добавил сохранение данных и разделение UI на небольшие компоненты.",
        ],
        result: "Проект хорошо показывает работу со state management и сложной клиентской логикой.",
        stack: ["React", "TypeScript", "Context", "SCSS"],
        categories: ["React", "TypeScript", "UI"],
        githubUrl: "https://github.com/Chuppy101/Todo_Calendar",
        accent: "lime",
        preview: "calendar",
      },
      {
        id: "movie-searcher",
        title: "movie_searcher",
        description: "Поиск фильмов через TMDB API, debounce, тренды и сохранение избранного.",
        caseSummary: "Поисковое приложение с API-интеграцией, debounce и трендовыми запросами.",
        role: "Frontend Developer",
        problem: "Нужно было сделать быстрый поиск фильмов с понятной обратной связью и API-ограничениями.",
        solution: [
          "Реализовал запросы к TMDB API и debounce для поиска.",
          "Добавил понятные сценарии для первого открытия, нулевой выдачи и ограничений API.",
          "Подготовил UI на React 19, Vite и Tailwind CSS.",
        ],
        result: "Проект демонстрирует API-интеграцию, async flow и аккуратный UX поиска.",
        stack: ["React", "TypeScript", "Vite", "TMDB API", "Appwrite"],
        categories: ["React", "TypeScript", "API"],
        githubUrl: "https://github.com/Chuppy101/movie_searcher",
        accent: "cyan",
        preview: "movies",
      },
      {
        id: "vpn-testpage",
        title: "HiroVPN Giveaway",
        description: "Страница розыгрыша для VPN-приложения HiroVPN с колесом фортуны.",
        caseSummary: "Промо-страница розыгрыша с адаптивной версткой, интерактивным колесом фортуны и акцентом на conversion UI.",
        role: "Frontend Developer",
        problem: "Нужно было сделать яркую промо-страницу для VPN-приложения с интерактивной механикой розыгрыша.",
        solution: [
          "Собрал адаптивную страницу на React под desktop и mobile.",
          "Реализовал интерактивность интерфейса и механику колеса фортуны.",
          "Продумал визуальную структуру промо-блока, CTA и пользовательский сценарий участия.",
        ],
        result: "Проект показывает навыки создания промо-интерфейсов, адаптивной верстки и интерактивных UI-сценариев.",
        stack: ["React", "Adaptive UI", "Interactive UI", "CSS"],
        categories: ["React", "UI"],
        githubUrl: "https://github.com/Chuppy101/vpn_testpage",
        accent: "violet",
        preview: "editor",
      },
    ] satisfies Project[],
    experience: [
      {
        company: "Mindbox",
        role: "Frontend Developer",
        period: "Сентябрь 2025 - Февраль 2026",
        duration: "6 месяцев",
        logoText: "mb",
        accent: "lime",
        bullets: [
          "Мигрировал части продуктовых интерфейсов на обновленную дизайн-систему: заменял legacy-контролы на новые React + TypeScript компоненты.",
          "Адаптировал логику ограничений, пресетов, валидации и типы данных в формах продуктовых настроек.",
          "Обновил Storybook с v7 до v10: привел конфиги, stories и addon-настройки к актуальному формату.",
          "Стабилизировал автотесты и CI: исправил unit-тесты, translation-check и проблемные моки, снизив flaky-падения примерно на 30%.",
          "Перевел часть тестовой инфраструктуры с Jest на Vitest и ускорил локальный прогон тестов примерно на 34%.",
          "Обновил Node.js до v24 для большинства микрофронтендов и выровнял shared-configs, ESLint и TypeScript-конфиги.",
        ],
        stack: ["React", "TypeScript", "Storybook", "Vitest", "CI"],
      },
      {
        company: "Codelines",
        role: "Frontend Developer",
        period: "Январь 2025 - Июль 2025",
        duration: "7 месяцев",
        logoText: "CL",
        accent: "blue",
        bullets: [
          "Разработал web-интерфейсы для клиентских CRM и административных систем на React и TypeScript.",
          "Реализовал страницы, формы, карточки, таблицы, списки, модальные окна и переиспользуемые UI-компоненты.",
          "Интегрировал интерфейсы с REST API: подключил получение, создание, обновление и удаление данных.",
          "Доработал страницу управления контентом для продуктовой CRM: CRUD-операции, фильтрацию, поиск по таблицам и разделение форм по типам данных.",
          "Улучшил адаптивную верстку клиентских интерфейсов и снизил количество UI-багов примерно на 15%.",
          "Выполнил отдельные backend-задачи на Node.js: доработал API-эндпоинты для форм и административных сценариев.",
        ],
        stack: ["React", "TypeScript", "REST API", "Node.js", "Adaptive UI"],
      },
      {
        company: "JTC",
        role: "Junior Frontend Developer",
        period: "Сентябрь 2024 - Декабрь 2024",
        duration: "4 месяца",
        logoText: "JTC",
        accent: "violet",
        bullets: [
          "Разработал интерфейсы для внутренних fintech-сервисов на React с использованием кастомных UI-утилит компании.",
          "Реализовал адаптивные пользовательские экраны для работы с серверными данными и REST API.",
          "Доработал формы и таблицы для рабочих сценариев пользователей: ввод данных, отображение статусов и визуальную структуру интерфейсов.",
          "Реализовал буферизацию данных на клиенте, снизил количество лишних перерисовок и улучшил поведение интерфейса при обновлении данных.",
          "Исправил UI-дефекты в адаптивной верстке и интеграциях с API, повысив стабильность пользовательских сценариев примерно на 10-15%.",
          "Настроил стили компонентов через внутренние инструменты компании и ускорил сборку UI-экранов.",
        ],
        stack: ["React", "JavaScript", "REST API", "Adaptive UI"],
      },
      {
        company: "Freelance",
        role: "Frontend / Fullstack Developer",
        period: "Январь 2023 - Август 2024",
        duration: "1 год 8 месяцев",
        logoText: "FR",
        accent: "cyan",
        bullets: [
          "В одиночку разрабатывал web-проекты для заказчиков: лендинги, многостраничные сайты, личные кабинеты, админ-панели и каталоги.",
          "Собирал frontend на React, TypeScript и JavaScript: компонентную архитектуру, формы, таблицы, списки, карточки, модальные окна, фильтры и поиск.",
          "Разрабатывал fullstack-функциональность с использованием Node.js, Strapi и баз данных: модели данных, API, роли пользователей и административные разделы.",
          "Реализовал бизнес-логику для коммерческих проектов: формы заявок, каталоги, корзины, статусы сущностей, фильтрацию и управление контентом.",
          "Оптимизировал интерфейсы после запуска: улучшил скорость загрузки страниц примерно на 20% и сократил количество визуальных багов.",
          "Выполнял полный цикл разработки: уточнял требования, оценивал задачи, выбирал стек, проектировал структуру, реализовывал и передавал проект заказчику.",
        ],
        stack: ["React", "TypeScript", "Node.js", "Strapi", "Fullstack"],
      },
    ] satisfies ExperienceItem[],
    skills,
    skillGroups: [
      { title: "Core", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
      { title: "State", skills: ["Redux Toolkit", "Zustand", "Context API"] },
      { title: "Styling", skills: ["Tailwind CSS", "SCSS", "Responsive UI"] },
      { title: "Integration", skills: ["REST API", "Axios / Fetch", "TMDB API"] },
      { title: "Tooling", skills: ["Vite", "Storybook", "GitHub Actions", "ESLint"] },
      { title: "Testing", skills: ["Vitest", "Jest", "Cypress"] },
      { title: "Backend", skills: ["Node.js", "Express", "Strapi", "MySQL", "MongoDB"] },
    ] satisfies SkillGroup[],
    ui: {
      controls: {
        themeLabel: "Тема",
        languageLabel: "Язык",
        dark: "Темная",
        light: "Светлая",
      },
      sidebar: {
        homeAria: "Перейти к началу страницы",
        builtWith: "Built with React + TS",
      },
      mobileNav: {
        openAria: "Открыть навигацию",
        closeAria: "Закрыть навигацию",
      },
      hero: {
        greeting: "Привет, я Александр",
        viewProjects: "Посмотреть проекты",
        downloadResume: "Скачать резюме",
        stats: [
          { label: "Experience", value: "3+ years" },
          { label: "Main stack", value: "React + TS" },
          { label: "Focus", value: "Product UI" },
        ],
      },
      sections: {
        projectsEyebrow: "Selected work",
        projectsTitle: "Проекты",
        projectsAction: "Смотреть все проекты",
        experienceEyebrow: "Commercial experience",
        experienceTitle: "Опыт работы",
        skillsEyebrow: "Tech map",
        skillsTitle: "Ключевые навыки",
        valueEyebrow: "Value",
        valueTitle: "Почему стоит нанять меня",
        contactsEyebrow: "Contacts",
        contactsTitle: "Контакты",
      },
      project: {
        filterAria: "Фильтры проектов",
        openDetails: "Открыть детали проекта",
        caseDetails: "Case details",
        closeDetails: "Закрыть детали проекта",
        description: "Описание",
        role: "Моя роль",
        problem: "Задача",
        solution: "Что реализовал",
        result: "Результат",
      },
      contact: {
        title: "Готов обсудить frontend-задачи",
        copyEmail: "Скопировать email",
        copiedEmail: "Email скопирован",
        downloadResume: "Скачать резюме",
        locationLabel: "Location",
        copyright: "© 2026 Alex Chub - Frontend Developer",
      },
    },
  },
  en: {
    profile: {
      ...commonProfile,
      fullName: "Alex Chub",
      role: "Frontend Developer",
      subtitle: "React / TypeScript / Product Interfaces",
      location: "Saint Petersburg / Remote",
      pitch:
        "I build SPA interfaces, work with client-side business logic, integrate REST APIs, improve project infrastructure, and create UI that is convenient to use.",
      experienceLabel: "3+ years of commercial experience",
      availability: "Open to frontend roles, remote work, and product teams.",
    },
    navItems: [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "why-hire-me", label: "Why Hire Me" },
      { id: "contact", label: "Contact" },
    ],
    socialLinks,
    valueCards: [
      {
        title: "Product thinking",
        text: "I think about the user flow, business goal, and a clear product outcome.",
        icon: Lightbulb,
        accent: "cyan",
      },
      {
        title: "UI quality",
        text: "I build polished responsive interfaces: from flexible layouts and complex forms to tables, cards, and modal flows.",
        icon: Gem,
        accent: "violet",
      },
      {
        title: "Infrastructure mindset",
        text: "I can work with Storybook, tests, CI, linters, configs, and dependency upgrades.",
        icon: Boxes,
        accent: "lime",
      },
      {
        title: "Ownership",
        text: "I can take a task end to end: clarify requirements, build the UI, integrate the API, and check edge cases.",
        icon: Rocket,
        accent: "blue",
      },
    ] satisfies ValueCard[],
    projectCategories,
    projectCategoryLabels: {
      All: "All",
      React: "React",
      TypeScript: "TypeScript",
      Fullstack: "Fullstack",
      UI: "UI",
      API: "API",
      Infrastructure: "Infrastructure",
    } satisfies Record<ProjectCategory, string>,
    projects: [
      {
        id: "admin-dashboard",
        title: "Admin-Dashboard",
        description: "SPA admin dashboard with forms, CRUD scenarios, and data management.",
        caseSummary: "An admin interface with data visualization, tables, and forms for working scenarios.",
        role: "Frontend Developer",
        problem: "The goal was to build a clear dashboard where users quickly see key metrics and manage entities.",
        solution: [
          "Built page structure and reusable UI blocks for cards, tables, and forms.",
          "Separated data, presentation, and interactive states.",
          "Created a responsive grid and clean interface states.",
        ],
        result: "The project demonstrates SPA, dashboard UI, forms, and product logic skills.",
        stack: ["React", "TypeScript", "Charts", "Forms"],
        categories: ["React", "TypeScript", "UI"],
        githubUrl: "https://github.com/Chuppy101/Admin-Dashboard",
        accent: "cyan",
        preview: "dashboard",
      },
      {
        id: "ecommerce-photo",
        title: "Ecommerce-photo",
        description: "E-commerce website with cart, filters, and Strapi CMS.",
        caseSummary: "A camera store with a catalog, product cards, cart, and CMS integration.",
        role: "Frontend / Fullstack Developer",
        problem: "The goal was to combine a convenient catalog, filtering, and content management through a backend CMS.",
        solution: [
          "Implemented product catalog, categories, search, cart, and product pages.",
          "Integrated the frontend with Strapi and the API layer.",
          "Built responsive UI for the main purchase scenarios.",
        ],
        result: "The project demonstrates fullstack thinking, API work, and e-commerce logic.",
        stack: ["React", "TypeScript", "Strapi", "REST API"],
        categories: ["React", "TypeScript", "Fullstack", "API", "Infrastructure"],
        githubUrl: "https://github.com/Chuppy101/Ecommerce-photo",
        accent: "violet",
        preview: "shop",
      },
      {
        id: "car-renter",
        title: "Car-Renter",
        description: "Car rental platform with responsive UI and payment integration.",
        caseSummary: "A car selection service with search, filters, cards, and modal details.",
        role: "Frontend Developer",
        problem: "The goal was to create a fast and clear interface for browsing and choosing cars.",
        solution: [
          "Built the hero section, search flow, filters, and car cards.",
          "Planned responsive layout for desktop and mobile.",
          "Moved content and UI states into a clear component structure.",
        ],
        result: "The project shows work with filters, cards, modals, and adaptive layouts.",
        stack: ["React", "TypeScript", "Next.js", "Tailwind"],
        categories: ["React", "TypeScript", "UI", "API"],
        githubUrl: "https://github.com/Chuppy101/Car-Renter",
        accent: "blue",
        preview: "cars",
      },
      {
        id: "todo-calendar",
        title: "Todo_Calendar",
        description: "Task calendar with multiple views and complex UI logic.",
        caseSummary: "A task planner with a calendar grid, profiles, forms, and local state.",
        role: "Frontend Developer",
        problem: "The goal was to make tasks, dates, and multiple interface states easy to manage.",
        solution: [
          "Implemented the calendar grid, modal windows, and task forms.",
          "Used Context + useReducer for predictable logic.",
          "Added data persistence and split the UI into small components.",
        ],
        result: "The project highlights state management and complex client-side logic.",
        stack: ["React", "TypeScript", "Context", "SCSS"],
        categories: ["React", "TypeScript", "UI"],
        githubUrl: "https://github.com/Chuppy101/Todo_Calendar",
        accent: "lime",
        preview: "calendar",
      },
      {
        id: "movie-searcher",
        title: "movie_searcher",
        description: "Movie search with TMDB API, debounce, trends, and favorites.",
        caseSummary: "A search app with API integration, debounce, and trending queries.",
        role: "Frontend Developer",
        problem: "The goal was to make fast movie search with clear feedback and API limit handling.",
        solution: [
          "Implemented TMDB API requests and debounce for search.",
          "Added clear flows for first load, empty results, and API limitations.",
          "Prepared the UI with React 19, Vite, and Tailwind CSS.",
        ],
        result: "The project demonstrates API integration, async flow, and clean search UX.",
        stack: ["React", "TypeScript", "Vite", "TMDB API", "Appwrite"],
        categories: ["React", "TypeScript", "API"],
        githubUrl: "https://github.com/Chuppy101/movie_searcher",
        accent: "cyan",
        preview: "movies",
      },
      {
        id: "vpn-testpage",
        title: "HiroVPN Giveaway",
        description: "Giveaway page for HiroVPN with a fortune wheel.",
        caseSummary: "A promo giveaway page with responsive layout, an interactive fortune wheel, and conversion-oriented UI.",
        role: "Frontend Developer",
        problem: "The goal was to create a bright promo page for a VPN app with an interactive giveaway mechanic.",
        solution: [
          "Built a responsive React page for desktop and mobile.",
          "Implemented interface interactions and the fortune wheel mechanic.",
          "Planned the promo block, CTA structure, and participation flow.",
        ],
        result: "The project demonstrates promo interface development, responsive layout, and interactive UI scenarios.",
        stack: ["React", "Adaptive UI", "Interactive UI", "CSS"],
        categories: ["React", "UI"],
        githubUrl: "https://github.com/Chuppy101/vpn_testpage",
        accent: "violet",
        preview: "editor",
      },
    ] satisfies Project[],
    experience: [
      {
        company: "Mindbox",
        role: "Frontend Developer",
        period: "Sept 2025 - Feb 2026",
        duration: "6 months",
        logoText: "mb",
        accent: "lime",
        bullets: [
          "Migrated parts of product interfaces to the updated design system, replacing legacy controls with new React + TypeScript components.",
          "Adapted constraints, presets, validation logic, and data types in product settings forms.",
          "Updated Storybook from v7 to v10 and migrated configs, stories, and addon settings to the current format.",
          "Stabilized automated tests and CI by fixing unit tests, translation checks, and problematic mocks, reducing flaky failures by roughly 30%.",
          "Moved part of the test infrastructure from Jest to Vitest and sped up local test runs by roughly 34%.",
          "Updated Node.js to v24 for most microfrontends and aligned shared configs, ESLint, and TypeScript settings.",
        ],
        stack: ["React", "TypeScript", "Storybook", "Vitest", "CI"],
      },
      {
        company: "Codelines",
        role: "Frontend Developer",
        period: "Jan 2025 - Jul 2025",
        duration: "7 months",
        logoText: "CL",
        accent: "blue",
        bullets: [
          "Developed web interfaces for client CRMs and admin systems with React and TypeScript.",
          "Implemented pages, forms, cards, tables, lists, modal windows, and reusable UI components.",
          "Integrated interfaces with REST API: fetching, creating, updating, and deleting data.",
          "Improved a content management page for a product CRM: CRUD operations, filtering, table search, and form separation by data type.",
          "Improved responsive layouts and reduced the number of UI bugs by roughly 15%.",
          "Handled several backend tasks in Node.js by updating API endpoints for forms and admin scenarios.",
        ],
        stack: ["React", "TypeScript", "REST API", "Node.js", "Adaptive UI"],
      },
      {
        company: "JTC",
        role: "Junior Frontend Developer",
        period: "Sept 2024 - Dec 2024",
        duration: "4 months",
        logoText: "JTC",
        accent: "violet",
        bullets: [
          "Developed interfaces for internal fintech services with React and the company's custom UI utilities.",
          "Implemented responsive user screens for working with server data and REST API.",
          "Improved forms and tables for user workflows: data input, status display, and visual interface structure.",
          "Implemented client-side data buffering, reduced unnecessary rerenders, and improved behavior during data updates.",
          "Fixed UI defects in responsive layouts and API integrations, improving user flow stability by roughly 10-15%.",
          "Configured component styles through internal company tools and sped up UI screen assembly.",
        ],
        stack: ["React", "JavaScript", "REST API", "Adaptive UI"],
      },
      {
        company: "Freelance",
        role: "Frontend / Fullstack Developer",
        period: "Jan 2023 - Aug 2024",
        duration: "1 year 8 months",
        logoText: "FR",
        accent: "cyan",
        bullets: [
          "Independently developed web projects for clients: landing pages, multi-page websites, personal accounts, admin panels, and catalogs.",
          "Built frontend with React, TypeScript, and JavaScript: component architecture, forms, tables, lists, cards, modals, filters, and search.",
          "Developed fullstack functionality using Node.js, Strapi, and databases: data models, APIs, user roles, and admin sections.",
          "Implemented business logic for commercial projects: request forms, catalogs, carts, entity statuses, filtering, and content management.",
          "Optimized interfaces after launch, improving page load speed by roughly 20% and reducing visual bugs.",
          "Handled the full development cycle: clarified requirements, estimated tasks, selected the stack, designed structure, implemented, and handed over the project.",
        ],
        stack: ["React", "TypeScript", "Node.js", "Strapi", "Fullstack"],
      },
    ] satisfies ExperienceItem[],
    skills,
    skillGroups: [
      { title: "Core", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
      { title: "State", skills: ["Redux Toolkit", "Zustand", "Context API"] },
      { title: "Styling", skills: ["Tailwind CSS", "SCSS", "Responsive UI"] },
      { title: "Integration", skills: ["REST API", "Axios / Fetch", "TMDB API"] },
      { title: "Tooling", skills: ["Vite", "Storybook", "GitHub Actions", "ESLint"] },
      { title: "Testing", skills: ["Vitest", "Jest", "Cypress"] },
      { title: "Backend familiarity", skills: ["Node.js", "Express", "Strapi", "MySQL", "MongoDB"] },
    ] satisfies SkillGroup[],
    ui: {
      controls: {
        themeLabel: "Theme",
        languageLabel: "Language",
        dark: "Dark",
        light: "Light",
      },
      sidebar: {
        homeAria: "Scroll to home",
        builtWith: "Built with React + TS",
      },
      mobileNav: {
        openAria: "Open navigation",
        closeAria: "Close navigation",
      },
      hero: {
        greeting: "Hi, I am Alex",
        viewProjects: "View projects",
        downloadResume: "Download resume",
        stats: [
          { label: "Experience", value: "3+ years" },
          { label: "Main stack", value: "React + TS" },
          { label: "Focus", value: "Product UI" },
        ],
      },
      sections: {
        projectsEyebrow: "Selected work",
        projectsTitle: "Projects",
        projectsAction: "View all projects",
        experienceEyebrow: "Commercial experience",
        experienceTitle: "Work experience",
        skillsEyebrow: "Tech map",
        skillsTitle: "Key skills",
        valueEyebrow: "Value",
        valueTitle: "Why hire me",
        contactsEyebrow: "Contacts",
        contactsTitle: "Contacts",
      },
      project: {
        filterAria: "Project filters",
        openDetails: "Open project details",
        caseDetails: "Case details",
        closeDetails: "Close project details",
        description: "Description",
        role: "My role",
        problem: "Problem",
        solution: "What I implemented",
        result: "Result",
      },
      contact: {
        title: "Ready to discuss frontend tasks",
        copyEmail: "Copy email",
        copiedEmail: "Email copied",
        downloadResume: "Download resume",
        locationLabel: "Location",
        copyright: "© 2026 Alex Chub - Frontend Developer",
      },
    },
  },
} satisfies Record<Language, {
  profile: typeof commonProfile & {
    fullName: string;
    role: string;
    subtitle: string;
    location: string;
    pitch: string;
    experienceLabel: string;
    availability: string;
  };
  navItems: Array<{ id: (typeof sectionIds)[number]; label: string }>;
  socialLinks: SocialLink[];
  valueCards: ValueCard[];
  projectCategories: ProjectCategory[];
  projectCategoryLabels: Record<ProjectCategory, string>;
  projects: Project[];
  experience: ExperienceItem[];
  skills: Skill[];
  skillGroups: SkillGroup[];
  ui: {
    controls: { themeLabel: string; languageLabel: string; dark: string; light: string };
    sidebar: { homeAria: string; builtWith: string };
    mobileNav: { openAria: string; closeAria: string };
    hero: { greeting: string; viewProjects: string; downloadResume: string; stats: Array<{ label: string; value: string }> };
    sections: {
      projectsEyebrow: string;
      projectsTitle: string;
      projectsAction: string;
      experienceEyebrow: string;
      experienceTitle: string;
      skillsEyebrow: string;
      skillsTitle: string;
      valueEyebrow: string;
      valueTitle: string;
      contactsEyebrow: string;
      contactsTitle: string;
    };
    project: {
      filterAria: string;
      openDetails: string;
      caseDetails: string;
      closeDetails: string;
      description: string;
      role: string;
      problem: string;
      solution: string;
      result: string;
    };
    contact: { title: string; copyEmail: string; copiedEmail: string; downloadResume: string; locationLabel: string; copyright: string };
  };
}>;
