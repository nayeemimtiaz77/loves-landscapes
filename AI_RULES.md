# AI Rules & Tech Stack

## Tech Stack
- **Framework**: TanStack Start (Full-stack React framework with SSR and file-based routing).
- **Language**: TypeScript for robust, type-safe development.
- **Routing**: TanStack Router for advanced, type-safe navigation.
- **State Management**: TanStack Query (React Query) for server state and data fetching.
- **Styling**: Tailwind CSS v4 for utility-first, responsive design.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible and customizable components.
- **Icons**: Lucide React for a consistent and modern icon set.
- **Animations**: Framer Motion for interactive transitions and `tw-animate-css` for simple animations.
- **Forms**: React Hook Form with Zod for schema-based validation.
- **Build Tool**: Vite with Nitro for optimized server-side execution.

## Library Usage Rules

### 1. Routing & Pages
- All new pages must be created as routes within `src/routes/` using TanStack Router's file-based routing system.
- Use the `createFileRoute` function for defining route components.

### 2. Styling & Layout
- Use **Tailwind CSS** utility classes for all styling. Avoid writing custom CSS in separate files.
- Follow the existing design system defined in `src/styles.css` (e.g., using brand colors like `primary`, `accent`, and `leaf`).
- Ensure all components are fully responsive using Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`, etc.).

### 3. UI Components
- Prioritize using existing **shadcn/ui** components located in `src/components/ui/`.
- If a new UI primitive is needed, install the corresponding Radix UI component and follow the shadcn pattern.
- Keep custom components in `src/components/` and aim for them to be small and focused (under 100 lines).

### 4. Icons
- Exclusively use **Lucide React** for iconography to maintain visual consistency.

### 5. Data Handling
- Use **TanStack Query** for any asynchronous data fetching or mutations.
- Define data structures and form validations using **Zod** schemas.
- Use **React Hook Form** for managing form state and validation.

### 6. Animations
- Use **Framer Motion** for complex, state-driven animations.
- Use **tw-animate-css** (Tailwind classes) for simple entry/exit animations.

### 7. Project Structure
- `src/components/`: Reusable UI components.
- `src/routes/`: Page components and routing logic.
- `src/lib/`: Utility functions, shared constants, and schemas.
- `public/`: Static assets like images and logos.