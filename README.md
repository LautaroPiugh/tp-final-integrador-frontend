# WhatsApp Web – TP Final Frontend (React)

## Descripción del desafío

El desafío elegido consiste en desarrollar una aplicación web frontend que replique el flujo principal y la experiencia de uso de **WhatsApp Web**, poniendo el foco en la navegación, el manejo de estados, la composición de componentes y la responsividad.

La aplicación permite:
- Visualizar un listado de chats.
- Buscar contactos utilizando parámetros de búsqueda en la URL.
- Acceder a una conversación individual.
- Enviar mensajes mediante un formulario.
- Visualizar información del contacto y el perfil del usuario.
- Navegar entre distintas “pantallas” manteniendo una experiencia fluida y coherente.

Para el diseño visual se tomó como referencia WhatsApp Web, priorizando la funcionalidad y la experiencia de usuario por sobre la originalidad estética.

---

## Tecnologías y librerías utilizadas

- **React**  
  Desarrollo completo de la aplicación utilizando componentes funcionales.

- **Vite**  
  Herramienta de bundling y entorno de desarrollo.

- **react-router-dom**  
  Manejo del enrutamiento de la aplicación:
    - Rutas principales (inicio, chat, perfil).
    - Uso de parámetros de ruta (`/chat/:id/messages`).
    - Uso de parámetros de búsqueda (`?q=`) para el buscador.

- **React Context API**  
  Utilizado para manejar:
    - Estado global del listado de contactos.
    - Contacto seleccionado.
    - Mensajes asociados a cada chat.

- **react-icons**  
  Uso de iconografía accesible y coherente con el diseño de WhatsApp.

- **CSS modular por componente**  
  Cada componente cuenta con su propio archivo de estilos, facilitando mantenimiento y escalabilidad.

---

## Cumplimiento de consignas

### ✅ Aplicación desarrollada en React
Toda la interfaz está construida con componentes React reutilizables.

### ✅ Uso de estados
Se utilizan estados para:
- Controlar el input de búsqueda.
- Manejar el envío de mensajes.
- Alternar vistas (chat, info del contacto, perfil).
- Controlar filtros (todos / no leídos / favoritos).

### ✅ Uso de contextos (valorado)
Se implementan **Context Providers** para evitar prop drilling y centralizar la lógica de contactos y mensajes.

### ✅ Enrutamiento con react-router-dom
La navegación se realiza completamente con React Router:
- Rutas dinámicas.
- Parámetros de búsqueda.
- Navegación programática.
- Manejo de eventos como tecla `ESC`.

### ✅ Uso de formularios
La aplicación cuenta con al menos un formulario funcional:
- Formulario de envío de mensajes dentro del chat.

### ✅ Uso de componentes
La aplicación está dividida en múltiples componentes:
- Sidebar
- Listado de contactos
- Buscador
- Chat
- Panel de información
- Perfil
- Menús y botones reutilizables

### ✅ Al menos 2 páginas en el flujo de la aplicación
La aplicación cuenta con múltiples vistas:
- Pantalla principal / Home
- Pantalla de chat
- Pantalla de perfil

Se utilizan **parámetros de búsqueda** en el buscador de chats.

### ✅ Página totalmente responsiva (320px a 2000px)
La interfaz es completamente responsiva:
- En desktop se muestran sidebar + chat.
- En mobile el chat ocupa toda la pantalla y se incluye botón de volver.
- La experiencia se adapta correctamente desde 320px hasta resoluciones grandes.

### ✅ Estilos accesibles
- Fondos oscuros con contraste adecuado.
- Tipografías legibles.
- Estados visuales claros (hover, focus).
- No se utilizan combinaciones de bajo contraste (fondos claros con letras claras).

### ✅ Principios de programación
El código sigue los principios vistos en clase:
- **DRY**: reutilización de componentes y lógica.
- **KISS**: soluciones simples y claras.
- **YAGNI**: no se implementan funcionalidades innecesarias.

### ✅ Uso de diseños existentes como referencia
Se tomó como guía el diseño de **WhatsApp Web**, permitiendo enfocarse en la arquitectura del frontend, la navegación y la experiencia de usuario.

---

## Dificultades encontradas (opcional)

Durante el desarrollo surgieron algunos desafíos relevantes:

- Manejo correcto del orden de hooks en componentes complejos.
- Sincronización entre estado interno y parámetros de búsqueda en la URL.
- Adaptación del layout para mobile sin duplicar lógica.
- Control del renderizado condicional manteniendo una UX fluida.
- Organización de estilos para evitar conflictos entre componentes.

Estas dificultades fueron resueltas aplicando buenas prácticas de React y refactorizando el código cuando fue necesario.

---

## Ejecución del proyecto

1. Instalar dependencias:
   ```bash
   npm install
