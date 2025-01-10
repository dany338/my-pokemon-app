# My Pokémon App

## Índice
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Ejecución](#ejecución)
4. [Deploy en Vercel](#deploy-en-vercel)
5. [Descripción del Proyecto](#descripción-del-proyecto)
   - [Componentes](#componentes)
   - [Hooks](#hooks)
   - [Páginas](#páginas)
   - [Utils](#utils)
6. [Casos de Prueba](#casos-de-prueba)
7. [Producción](#producción)

---

## Introducción
Este proyecto es una aplicación de gestión y visualización de Pokémon. Los usuarios pueden buscar Pokémon, ver detalles y administrar favoritos. La aplicación está construida con React, TypeScript y utiliza Vite como bundler.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd my-pokemon-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## Ejecución

### Modo de desarrollo:
```bash
npm run dev
```

### Generar una build de producción:
```bash
npm run build
```

### Previsualizar la build:
```bash
npm run preview
```

### Ejecutar los casos de prueba con Vitest:
```bash
npx vitest
```

Para ejecutar solo los casos de prueba que fallaron:
```bash
npx vitest --rerun
```

---

## Deploy en Vercel

1. Instala Vercel CLI si no lo tienes:
   ```bash
   npm install -g vercel
   ```

2. Realiza el deploy:
   ```bash
   vercel
   ```

3. Sigue las instrucciones interactivas para configurar tu proyecto y obtener la URL de producción.

---

## Descripción del Proyecto

### Componentes

#### `Navbar.tsx`
- Descripción: Componente de navegación principal con un menú responsivo (incluye un menú desplegable para pantallas pequeñas).
- Funciones principales:
  - Navegación entre páginas (Inicio, Favoritos, Logout).
  - Soporte para diseño responsivo con `Disclosure`.

#### `PokemonCard.tsx`
- Descripción: Muestra una tarjeta individual de un Pokémon.
- Props principales:
  - `id`: ID del Pokémon.
  - `name`: Nombre del Pokémon.
  - `image`: Imagen del Pokémon.
  - `handleNavigateToDetails`: Función para navegar a la página de detalles.

#### `Pagination.tsx`
- Descripción: Control de paginación para navegar entre diferentes páginas de resultados.
- Props principales:
  - `currentPage`: Página actual.
  - `totalPages`: Total de páginas disponibles.
  - `onPageChange`: Función para cambiar de página.

#### `SearchBar.tsx`
- Descripción: Barra de búsqueda para filtrar Pokémon por nombre.
- Props principales:
  - `onSearch`: Función para manejar el evento de búsqueda.

### Hooks

#### `usePokemonListStore.ts`
- Descripción: Maneja el estado global de la lista de Pokémon.
- Funcionalidades:
  - Almacena y actualiza la lista de Pokémon.
  - Administra la posición de scroll.

#### `favoritiesStore.ts`
- Descripción: Maneja el estado global de los Pokémon marcados como favoritos.
- Funcionalidades:
  - Agregar y eliminar Pokémon de favoritos.
  - Obtener la lista de favoritos.

### Páginas

#### `Home.tsx`
- Descripción: Página principal donde se lista la colección de Pokémon.
- Funciones principales:
  - Búsqueda por nombre.
  - Navegación a la página de detalles.

#### `Details.tsx`
- Descripción: Muestra información detallada de un Pokémon específico.
- Datos mostrados:
  - Imagen.
  - Habilidades.

#### `Favorites.tsx`
- Descripción: Página donde se muestran los Pokémon marcados como favoritos.
- Funciones principales:
  - Listar todos los Pokémon favoritos.
  - Navegación a la página de detalles desde los favoritos.

### Utils

#### `api.ts`
- Descripción: Contiene funciones para realizar solicitudes a la API de Pokémon.
- Funciones principales:
  - `fetchPokemonList`: Obtiene la lista de Pokémon.
  - `fetchPokemonDetails`: Obtiene detalles de un Pokémon específico.

#### `auth.ts`
- Descripción: Maneja la autenticación y almacenamiento del token.
- Funciones principales:
  - `validateCredentials`: Verifica las credenciales ingresadas.
  - `saveAuthToken`: Guarda el token de autenticación en el `localStorage`.
  - `clearAuthToken`: Elimina el token de autenticación.
  - `isAuthenticated`: Verifica si el usuario está autenticado.

#### `formatters.ts`
- Descripción: Funciones auxiliares para formatear datos.
- Funciones principales:
  - `formatPokemonName`: Da formato al nombre de un Pokémon.

#### `localStorageHelpers.ts`
- Descripción: Funciones para manejar operaciones comunes en el `localStorage`.
- Funciones principales:
  - `saveToLocalStorage`: Guarda un dato en el `localStorage`.
  - `getFromLocalStorage`: Recupera un dato del `localStorage`.
  - `removeFromLocalStorage`: Elimina un dato del `localStorage`.

---

## Casos de Prueba

### Archivo: `Home.test.tsx`
- Casos cubiertos:
  1. Mostrar la lista de Pokémon.
  2. Navegar a la página de detalles al hacer clic en un Pokémon.
  3. Restaurar la posición de scroll al volver a la lista.

### Archivo: `Navbar.test.tsx`
- Casos cubiertos:
  1. Mostrar elementos del menú.
  2. Manejar el logout correctamente.
  3. Alternar el menú en pantallas pequeñas.

### Archivo: `usePokemonListStore.test.ts`
- Casos cubiertos:
  1. Inicialización con valores predeterminados.
  2. Actualizar la página actual.
  3. Actualizar la posición de scroll.

---

## Producción

### URL
La aplicación está disponible en:
[https://my-pokemon-app.vercel.app](https://my-pokemon-aroawjsfa-dany338s-projects.vercel.app)
