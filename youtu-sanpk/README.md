# 📺 Carpeta de Videos YouTube - Sanpiku

## 🎯 ¿Para qué sirve esta carpeta?

Esta carpeta está destinada a **organizar y documentar** todos los videos de YouTube que añadas a tu sitio web Sanpiku. Aunque los videos no se almacenan físicamente aquí (porque están en YouTube), esta carpeta te ayuda a:

- 📝 Mantener un registro de todos los videos que has añadido
- 🔗 Guardar los enlaces de los videos
- 📋 Documentar información sobre cada video (título, descripción, fecha)
- 🗂️ Organizar tus videos por categorías o temas

---

## 🎬 ¿Cómo funciona YouTube en tu sitio web?

Los videos de YouTube se **incrustan** (embeben) en tu página web usando un código especial llamado **iframe**. Esto significa que:

- ✅ El video se reproduce directamente en tu página
- ✅ No ocupa espacio en tu servidor
- ✅ Los visitantes no necesitan salir de tu sitio para ver el video
- ✅ YouTube se encarga de la reproducción y calidad

---

## 📖 Cómo obtener el código de un video de YouTube

### Paso 1: Ve a YouTube
1. Abre tu navegador (Chrome, Firefox, Edge, etc.)
2. Ve a la página: **www.youtube.com**
3. Busca el video que quieres añadir

### Paso 2: Encuentra el botón "Compartir"
1. Reproduce el video que quieres añadir
2. Debajo del video, verás varios botones
3. Busca el botón que dice **"Compartir"** (tiene un icono de flecha)
4. Haz clic en ese botón

### Paso 3: Obtén el código de inserción
1. Se abrirá una ventana pequeña con opciones
2. Busca y haz clic en el botón **"Insertar"** o **"Embed"**
3. Aparecerá un cuadro con un código que empieza con `<iframe`
4. Haz clic en el botón **"COPIAR"** para copiar todo el código

### Paso 4: (Opcional) Personaliza las opciones
Antes de copiar, puedes marcar o desmarcar opciones como:
- ☑️ Mostrar controles del reproductor
- ☑️ Mostrar información del video
- ☑️ Habilitar modo de privacidad mejorada
- ☑️ Comenzar en un tiempo específico

---

## 🛠️ Cómo añadir el video a tu sitio web

### Opción 1: Añadir en la sección de videos (Recomendado)

1. **Abre el archivo index.html** (puedes usar Notepad, Notepad++, o cualquier editor de texto)

2. **Busca la sección de videos** (aproximadamente línea 200-250):
   ```html
   <!-- ============================================
        SECCIÓN DE VIDEOS DE YOUTUBE
        Aquí se muestran videos relacionados
   ============================================ -->
   <section class="youtube-section">
   ```

3. **Dentro de esa sección, busca el contenedor de videos**:
   ```html
   <div class="video-grid">
       <!-- Aquí van los videos -->
   ```

4. **Pega tu código de YouTube** justo después de los videos existentes, pero ANTES de cerrar el `</div>`

5. **Guarda el archivo** (Ctrl + S o Archivo → Guardar)

6. **Abre index.html en tu navegador** para ver el resultado

### Opción 2: Crear una tarjeta de video personalizada

Para un diseño más bonito, envuelve tu código de YouTube en una tarjeta:

```html
<!-- Nueva tarjeta de video -->
<div class="video-card">
    <h3>Título de tu video</h3>
    <div class="video-wrapper">
        <!-- PEGA AQUÍ TU CÓDIGO DE YOUTUBE -->
        <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/CODIGO_DEL_VIDEO" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    <p class="video-description">
        Descripción breve de lo que trata este video
    </p>
</div>
```

---

## 🎨 Ejemplo completo de código de YouTube

Así se ve un código de video de YouTube típico:

```html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
```

### 📝 Explicación de cada parte:

- **width="560"** → Ancho del video en píxeles
- **height="315"** → Alto del video en píxeles
- **src="..."** → Dirección del video (NO CAMBIAR)
- **allowfullscreen** → Permite ver el video en pantalla completa

---

## 📏 Cómo personalizar el tamaño del video

### Tamaños recomendados:

| Uso | Width | Height | Descripción |
|-----|-------|--------|-------------|
| **Pequeño** | 320 | 180 | Para barras laterales |
| **Mediano** | 560 | 315 | Tamaño estándar (recomendado) |
| **Grande** | 800 | 450 | Para secciones destacadas |
| **Extra grande** | 1024 | 576 | Para pantallas grandes |

### ⚠️ Importante sobre los tamaños:
- Mantén siempre la proporción **16:9** (ancho:alto)
- Si cambias el ancho, calcula el alto: `alto = ancho ÷ 1.778`
- Ejemplo: Si quieres ancho 640 → alto = 640 ÷ 1.778 = 360

---

## ⚙️ Opciones avanzadas de configuración

Puedes modificar la URL del video para cambiar cómo se reproduce:

### 1️⃣ Reproducción automática
Añade `?autoplay=1` al final de la URL:
```
src="https://www.youtube.com/embed/CODIGO?autoplay=1"
```

### 2️⃣ Sin controles
Añade `?controls=0`:
```
src="https://www.youtube.com/embed/CODIGO?controls=0"
```

### 3️⃣ Comenzar en un tiempo específico
Añade `?start=60` (empieza en el segundo 60):
```
src="https://www.youtube.com/embed/CODIGO?start=60"
```

### 4️⃣ Combinar múltiples opciones
Usa `&` para unir opciones:
```
src="https://www.youtube.com/embed/CODIGO?autoplay=1&start=30&controls=0"
```

### 5️⃣ Modo bucle (repetir video)
```
src="https://www.youtube.com/embed/CODIGO?loop=1&playlist=CODIGO"
```
⚠️ Nota: Para que funcione el loop, debes repetir el código en `playlist=`

---

## 📋 Registro de videos añadidos

### 📌 Plantilla para documentar tus videos:

Copia y pega esta plantilla cada vez que añadas un video nuevo:

```
---
📹 Video #1
- Título: [Nombre del video]
- Enlace YouTube: https://www.youtube.com/watch?v=CODIGO
- Código embed: CODIGO
- Categoría: [Mitos / Leyendas / Refranes / Anécdotas]
- Fecha añadido: [DD/MM/AAAA]
- Descripción: [Breve descripción del contenido]
- Duración: [Minutos:Segundos]
---
```

### Ejemplo de uso:

```
---
📹 Video #1
- Título: La Llorona - Leyenda Mexicana
- Enlace YouTube: https://www.youtube.com/watch?v=ejemplo123
- Código embed: ejemplo123
- Categoría: Leyendas
- Fecha añadido: 03/08/2026
- Descripción: Relato animado de la leyenda de La Llorona
- Duración: 8:45
---

📹 Video #2
- Título: Refranes Populares y su Significado
- Enlace YouTube: https://www.youtube.com/watch?v=ejemplo456
- Código embed: ejemplo456
- Categoría: Refranes
- Fecha añadido: 03/08/2026
- Descripción: Explicación de 10 refranes más usados
- Duración: 12:30
---
```

---

## ✅ Buenas prácticas y recomendaciones

### 🎯 Selección de videos:
- ✅ Elige videos de buena calidad (mínimo 720p)
- ✅ Verifica que el video sea apropiado para tu audiencia
- ✅ Asegúrate de que el video esté relacionado con tu contenido
- ✅ Comprueba que el video tenga los derechos necesarios
- ⚠️ No uses videos con música con copyright si planeas monetizar

### 📱 Diseño responsivo:
- ✅ Los videos se ajustarán automáticamente en móviles (ya está configurado en styles.css)
- ✅ No te preocupes por el tamaño en diferentes dispositivos
- ✅ Prueba siempre en móvil y computadora

### 🚀 Rendimiento:
- ⚠️ No añadas más de 5-6 videos en una sola página
- ⚠️ Demasiados videos pueden hacer que tu página cargue lento
- ✅ Considera crear páginas separadas para muchos videos

### 🔒 Privacidad:
- ✅ Usa el modo de privacidad mejorada de YouTube
- ✅ La URL debería ser: `youtube-nocookie.com` en lugar de `youtube.com`
- Ejemplo: `https://www.youtube-nocookie.com/embed/CODIGO`

### 📊 Organización:
- ✅ Documenta TODOS los videos que añadas en este archivo
- ✅ Agrupa videos por categorías
- ✅ Mantén actualizada la lista
- ✅ Guarda una copia de respaldo de los códigos

---

## 🆘 Solución de problemas comunes

### ❌ Problema: "El video no se muestra"
**Soluciones:**
1. Verifica que copiaste TODO el código `<iframe>...</iframe>`
2. Asegúrate de que el video no esté privado o eliminado en YouTube
3. Comprueba que no hay errores de sintaxis en el HTML

### ❌ Problema: "El video está muy pequeño/grande"
**Solución:**
- Cambia los valores de `width` y `height` manteniendo la proporción 16:9

### ❌ Problema: "El video no carga rápido"
**Solución:**
- Añade `loading="lazy"` al iframe: `<iframe loading="lazy" ...>`
- Esto hace que el video solo cargue cuando el usuario baje hasta verlo

### ❌ Problema: "Quiero que el video comience pausado"
**Solución:**
- NO añadas `autoplay=1` en la URL
- El video comenzará pausado por defecto

---

## 📞 Necesitas más ayuda

Si necesitas ayuda para:
- Encontrar videos específicos
- Crear listas de reproducción
- Organizar videos por categorías
- Problemas técnicos

**Recursos útiles:**
- 📖 Centro de ayuda de YouTube: https://support.google.com/youtube
- 💡 Busca en Google: "cómo incrustar video de YouTube"
- 🎓 Tutoriales en YouTube sobre "embed YouTube videos"

---

## 📝 Notas finales

- Esta carpeta es principalmente para **tu organización personal**
- Puedes guardar aquí archivos de texto, listas, o notas sobre tus videos
- Los archivos que guardes aquí NO aparecerán automáticamente en el sitio
- Solo aparecerán los videos que añadas manualmente al `index.html`

---

**¡Última actualización:** 03/08/2026  
**Versión del documento:** 1.0  
**Proyecto:** Sanpiku - Historias y Leyendas

---

¡Feliz creación de contenido! 🎉📹✨
