# TP Final Frontend — Mini WhatsApp (Contactos + Chat)

Aplicación web desarrollada en **React + Vite** con un flujo simple de **listado de contactos** y **pantalla de chat**.

El objetivo es cumplir los lineamientos del TP final con una app “tipo WhatsApp” que prioriza:
- Enrutamiento y navegación.
- Estado, formularios y componentes.
- Buenas prácticas (DRY/KISS) y estilos accesibles.

## Requisitos del TP (checklist)

- **React:** sí.
- **React Router (react-router-dom):** sí (rutas y search params).
- **Estados:** sí (búsqueda, tema, mensajes, carga simulada, etc.).
- **Contextos:** sí (ThemeContext, ContactListContext, ContactDetailContext).
- **Formulario:** sí (búsqueda + envío de mensaje).
- **2+ páginas en el flujo:** sí (`/` y `/chat/:contact_id/messages`).
- **Search params:** sí (`?q=...` filtra contactos).
- **Responsiva:** sí (320px a 2000px) con layout flexible.
- **Accesibilidad:** contraste adecuado, focus visible, labels “sr-only”.

## Librerías

- `react`
- `react-dom`
- `react-router-dom`

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Notas

- Los datos son **mock** (`src/data/*`) para evitar depender de una API.
- La carga de contactos y de detalle de contacto simula latencia con `setTimeout`.

## Dificultades / mejoras futuras

- Persistencia de mensajes y contactos (API / localStorage).
- Pantalla “Crear contacto” real.
- Mejoras visuales (avatar fallback, skeleton loaders, etc.).
