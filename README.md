# Desarrollo de una aplicación de seguimiento de tareas

La empresa necesita una aplicación que permita a los usuarios crear, editar y eliminar tareas. Los usuarios deben poder ver una lista de tareas y marcarlas como completadas. La aplicación debe ser escalable y mantener un alto nivel de calidad del código.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React con TypeScript |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Creación de la estructura básica

**Objetivo:** Establecer la estructura y navegación básica de la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crear un proyecto React con TypeScript.
- Configurar la navegación básica entre las páginas de inicio y de creación de tareas.

**Entregable:** Proyecto React con TypeScript y navegación básica configurada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la mejor manera de organizar los componentes y las rutas.

</details>

### Fase 2: Creación de componentes funcionales

**Objetivo:** Desarrollar los componentes necesarios para mostrar y manejar las tareas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear componentes funcionales para la lista de tareas y el formulario de creación de tareas.
- Implementar el estado local para manejar las tareas.

**Entregable:** Componentes funcionales para la lista de tareas y el formulario de creación de tareas con estado local implementado.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda utilizar hooks para manejar el estado y los efectos secundarios.

</details>

### Fase 3: Implementación de la lógica de tareas

**Objetivo:** Añadir la lógica para crear, editar y eliminar tareas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la lógica para crear, editar y eliminar tareas.
- Actualizar la lista de tareas en tiempo real.

**Entregable:** Lógica implementada para crear, editar y eliminar tareas, con actualización en tiempo real de la lista de tareas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo mantener la coherencia entre el estado local y la vista.

</details>

### Fase 4: Mejora y escalabilidad

**Objetivo:** Mejorar la aplicación y prepararla para futuras expansiones.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Revisar y mejorar el código para asegurar su calidad y mantenibilidad.
- Preparar la aplicación para futuras expansiones y mejoras.

**Entregable:** Aplicación mejorada y preparada para futuras expansiones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo podrías modularizar el código para facilitar futuras expansiones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente funcional en React y para qué sirve?
- **paraQueSirve**: ¿Para qué sirven los hooks en React y cómo se usan?
- **comoSeUsa**: ¿Cómo se usa TypeScript en un proyecto React para mejorar la calidad del código?
- **erroresComunes**: ¿Cuáles son los errores comunes al trabajar con estado local en React y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de la lógica de tareas en una aplicación React con TypeScript?

## Criterios de Evaluacion

- Establecer la estructura y navegación básica de la aplicación.
- Desarrollar los componentes necesarios para mostrar y manejar las tareas.
- Implementar la lógica para crear, editar y eliminar tareas.
- Revisar y mejorar el código para asegurar su calidad y mantenibilidad.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
el comando de build o arranque canonico del stack elegido
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
