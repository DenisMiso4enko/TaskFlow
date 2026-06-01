# TaskFlow — план обучения (Next.js)

Учебный проект для портфолио **Next.js developer**: task-менеджер для dev-команд (маркетинг + app + API + позже БД).

**Стек:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, [Mokky](https://mokky.dev/) (mock API).

**Документация Next.js:** https://nextjs.org/docs

---

## Прогресс

| Статус | Значение              |
| ------ | --------------------- |
| ✅     | Сделано               |
| 🔄     | В процессе / частично |
| ⬜     | Запланировано         |

**Общий прогресс:** ~70% (модули 1–8 закрыты, дальше — модуль 9)

---

## Архитектура проекта

```
Marketing (светлая)          App (тёмная)
/  /pricing  /blog           /dashboard  /projects
       ↓                            ↓
  lib/posts.ts              Mokky API (columns, tasks, projects)
  generateStaticParams      Server Components + Client islands
```

**Дизайн и mock-данные:** папка [`design/`](design/) (wireframes, `mokky-data/*.json`).

---

## Модуль 1 — Основа и вёрстка

| #   | Задача                                                 | Статус |
| --- | ------------------------------------------------------ | ------ |
| 1.1 | `create-next-app`, App Router, TypeScript, Tailwind    | ✅     |
| 1.2 | Route groups `(marketing)` / `(app)`, layouts          | ✅     |
| 1.3 | Landing `/`, pricing, blog (заглушки → полная вёрстка) | ✅     |
| 1.4 | Dashboard shell: sidebar, topbar, канбан (mock)        | ✅     |
| 1.5 | Design kit: `design/`, токены, preview                 | ✅     |

**Навыки:** [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure), [Layouts](https://nextjs.org/docs/app/getting-started/layouts-and-pages), [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups)

---

## Модуль 2 — Маршрутизация и навигация

| #   | Задача                                                 | Статус |
| --- | ------------------------------------------------------ | ------ |
| 2.1 | `usePathname` + client `NavLink` (header, sidebar)     | ✅     |
| 2.2 | Динамический маршрут `/blog/[slug]`                    | ✅     |
| 2.3 | `generateStaticParams` + `generateMetadata` для постов | ✅     |
| 2.4 | `not-found.tsx` для несуществующего поста              | ✅     |

**Навыки:** [Linking](https://nextjs.org/docs/app/getting-started/linking-and-navigating), [Dynamic Routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes), [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

---

## Модуль 3 — Server vs Client Components

| #   | Задача                                           | Статус |
| --- | ------------------------------------------------ | ------ |
| 3.1 | `TaskStats` — server, статистика с доски         | ✅     |
| 3.2 | `NewTaskButton` — client, интерактив (без alert) | ✅     |
| 3.3 | `TaskSearch` + `useState` (фильтр в KanbanBoard) | ✅     |
| 3.4 | `KanbanBoard` — client, фильтрация по title      | ✅     |

**Навыки:** [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)

**Паттерн:** server `page.tsx` → props → client «острова»; нельзя передавать `onClick` с server в client.

---

## Модуль 4 — Fetching Data (Mokky API)

| #    | Задача                                                       | Статус |
| ---- | ------------------------------------------------------------ | ------ |
| 4.1  | `/projects` — `fetch` + `revalidate: 60`, типы, `lib/api.ts` | ✅     |
| 4.2  | `projects/loading.tsx` — skeleton                            | ✅     |
| 4.3  | `projects/error.tsx` — error boundary + `reset()`            | ✅     |
| 4.4a | `apiGetColumns`, `apiGetTasks`, `buildBoardColumns`          | ✅     |
| 4.4b | Dashboard: один `board` → `TaskStats` + `KanbanBoard`        | ✅     |
| 4.5  | Убрать зависимость от `mock-tasks` в `TaskCard`              | ⬜     |

**Навыки:** [Fetching Data](https://nextjs.org/docs/app/getting-started/fetching-data), [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading), [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)

**Mokky resources:** `projects`, `columns`, `tasks`, `posts` — см. [`design/mokky-data/`](design/mokky-data/)

---

## Модуль 5 — Мутации и Server Actions

| #   | Задача                                               | Статус |
| --- | ---------------------------------------------------- | ------ |
| 5.1 | `createTask` — POST в Mokky, форма, `revalidatePath` | ✅     |
| 5.2 | Модалка `<dialog>`, центрирование, hidden fields     | ✅     |
| 5.3 | `useFormStatus` — loading на кнопке Submit           | ⬜     |
| 5.4 | Обработка ошибок формы (`useFormState` или toast)    | ⬜     |
| 5.5 | Удаление задачи (Server Action + DELETE)             | ✅     |
| 5.6 | Редактирование задачи (PATCH)                        | ✅     |

**Навыки:** [Mutating Data](https://nextjs.org/docs/app/getting-started/mutating-data), [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions)

---

## Модуль 6 — Кэш и revalidation

| #   | Задача                                                | Статус |
| --- | ----------------------------------------------------- | ------ |
| 6.1 | `cacheTag` / `revalidateTag` для tasks                | ✅     |
| 6.2 | `revalidatePath` vs `revalidateTag` — когда что       | ✅     |
| 6.3 | `dynamic = 'force-dynamic'` на примере одной страницы | ✅     |
| 6.4 | On-demand revalidation после create/update            | ✅     |

**Навыки:** [Caching](https://nextjs.org/docs/app/getting-started/caching), [Revalidating](https://nextjs.org/docs/app/getting-started/revalidating)

---

## Модуль 7 — Metadata, SEO, UX

| #   | Задача                                         | Статус |
| --- | ---------------------------------------------- | ------ |
| 7.1 | `metadata` / template в root layout            | ✅     |
| 7.2 | OG images для marketing                        | ✅     |
| 7.3 | `dashboard/loading.tsx`, `dashboard/error.tsx` | ✅     |
| 7.4 | Страница `/projects/[slug]`                    | ✅     |

**Навыки:** [Metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

---

## Модуль 8 — Route Handlers (BFF)

| #   | Задача                                              | Статус |
| --- | --------------------------------------------------- | ------ |
| 8.1 | `app/api/projects/route.ts` — прокси к Mokky        | ✅     |
| 8.2 | Client fetch на свой `/api/*` (когда нужен browser) | ✅     |
| 8.3 | Webhook-заглушка `POST /api/webhooks`               | ✅     |

**Навыки:** [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)

---

## Модуль 9 — Authentication

| #   | Задача                                                  | Статус |
| --- | ------------------------------------------------------- | ------ |
| 9.1 | Auth.js / NextAuth — login                              | ✅     |
| 9.2 | Middleware или proxy — защита `/dashboard`, `/projects` | ⬜     |
| 9.3 | Публичные vs приватные маршруты                         | ⬜     |
| 9.4 | Роли owner / member (базово)                            | ⬜     |

**Навыки:** [Authentication](https://nextjs.org/docs/app/guides/authentication)

---

## Модуль 10 — База данных

| #    | Задача                                | Статус |
| ---- | ------------------------------------- | ------ |
| 10.1 | Prisma + PostgreSQL (Neon / Supabase) | ⬜     |
| 10.2 | Модели: User, Project, Task, Column   | ⬜     |
| 10.3 | Заменить Mokky на Prisma в `lib/api`  | ⬜     |
| 10.4 | Seed скрипт из `design/mokky-data`    | ⬜     |

---

## Модуль 11 — Тестирование

| #    | Задача                          | Статус |
| ---- | ------------------------------- | ------ |
| 11.1 | Playwright: landing → dashboard | ⬜     |
| 11.2 | Vitest для `buildBoardColumns`  | ⬜     |

**Навыки:** [Testing](https://nextjs.org/docs/app/guides/testing)

---

## Модуль 12 — Deploy и портфолио

| #    | Задача                               | Статус |
| ---- | ------------------------------------ | ------ |
| 12.1 | Deploy на Vercel, env variables      | ⬜     |
| 12.2 | README: скриншоты, стек, что изучено | ⬜     |
| 12.3 | (Опционально) CI: lint + build       | ⬜     |

**Навыки:** [Deploying](https://nextjs.org/docs/app/getting-started/deploying)

---

## Текущая структура URL

| URL            | Описание                |
| -------------- | ----------------------- |
| `/`            | Landing                 |
| `/pricing`     | Тарифы                  |
| `/blog`        | Список постов           |
| `/blog/[slug]` | Статья (SSG)            |
| `/dashboard`   | Канбан + stats (Mokky)  |
| `/projects`    | Список проектов (Mokky) |

---

## Ключевые файлы

| Путь                                 | Назначение                         |
| ------------------------------------ | ---------------------------------- |
| `src/app/(marketing)/`               | Публичная зона                     |
| `src/app/(app)/`                     | Приложение (dashboard, projects)   |
| `src/lib/api.ts`                     | `fetch` к Mokky                    |
| `src/lib/board.ts`                   | Сборка колонок канбана             |
| `src/lib/actions/tasks.ts`           | Server Action `createTask`         |
| `src/components/app/KanbanBoard.tsx` | Client: поиск + канбан             |
| `design/`                            | Дизайн, wireframes, JSON для Mokky |

---

## Как обновлять этот файл

После каждого модуля меняй ⬜ → ✅ в таблице и при необходимости процент в **Прогресс**.

---

_Последнее обновление: май 2026_
