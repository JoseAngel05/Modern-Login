# Modern Login

Un proyecto de demo en React + Vite que muestra una interfaz moderna de autenticación con:

- Login y registro en una sola experiencia con animación
- Diseño responsive limpio y centrado
- Validación de confirmación de contraseña
- Reset de formulario tras el envío
- Estilos glassmorphism con efectos de fondo y botones animados

## Tecnologías

- React 19
- Vite
- CSS moderno

## Cómo ejecutar

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre la aplicación en tu navegador siguiendo la URL que muestra Vite (por defecto `http://localhost:5173`).

## Cómo construir

```bash
npm run build
```

## Estructura principal

- `src/App.jsx` — Componente principal con la lógica de login/registro, animación y validaciones.
- `src/App.css` — Estilos personalizados de la interfaz y responsive.
- `src/index.css` — Reset y estilos base globales.

## Comportamiento

- El formulario muestra el modo actual (`Login` / `Registro`) y anima el card.
- En modo registro, comprueba que la contraseña y la confirmación coincidan.
- Al enviar cualquier formulario, los campos se limpian.

## Notas

Este proyecto está hecho para servir como una base de UI moderna y puede integrarse con un backend real de autenticación añadiendo lógica de API en `handleSubmit`.
