# 📚 Carpeta de Historias - Sanpiku

## ¿Qué es esta carpeta?

Esta carpeta **historias-sanpk/** es el lugar donde se almacenan todas las historias individuales del proyecto Sanpiku. Cada historia es un archivo HTML independiente que se puede crear y editar fácilmente.

---

## 🎯 Propósito de esta carpeta

Esta carpeta sirve para:
- **Organizar** todas las historias en un solo lugar
- **Mantener el proyecto ordenado** separando el contenido de la estructura principal
- **Facilitar** la adición de nuevas historias sin modificar el código principal
- **Permitir** que cualquier persona pueda añadir contenido sin conocimientos técnicos avanzados

---

## 📝 Formato de archivos para historias

### Nomenclatura de archivos
Los archivos de historias deben seguir este formato:

```
categoria-titulo.html
```

**Ejemplos:**
- `mito-la-llorona.html`
- `leyenda-el-dorado.html`
- `refran-mas-vale-pajaro.html`
- `anecdota-primer-viaje.html`

**Reglas importantes:**
- ✅ Usa **minúsculas** solamente
- ✅ Reemplaza **espacios** con **guiones** (-)
- ✅ No uses **tildes** ni **caracteres especiales**
- ✅ Comienza siempre con la **categoría** (mito, leyenda, refran, anecdota)

---

## 🚀 Cómo crear una nueva historia - Paso a paso

### Paso 1: Crea un nuevo archivo
1. Abre el **Bloc de notas** (o cualquier editor de texto)
2. Copia la plantilla que encontrarás más abajo
3. Guarda el archivo con el nombre apropiado (ejemplo: `mito-nuevo.html`)
4. Asegúrate de guardarlo **dentro de esta carpeta** (historias-sanpk/)

### Paso 2: Personaliza el contenido
Edita las siguientes secciones en la plantilla:

- **`<title>`**: El título de tu historia (aparecerá en la pestaña del navegador)
- **`<h1>`**: El título principal que verán los lectores
- **`<p class="categoria">`**: La categoría (Mito, Leyenda, Refrán o Anécdota)
- **`<p class="fecha">`**: La fecha de publicación
- **Contenido**: Escribe tu historia dentro de los párrafos `<p>...</p>`

### Paso 3: Guarda y verifica
1. Guarda el archivo
2. Haz doble clic en el archivo para abrirlo en el navegador
3. Verifica que se vea correctamente

---

## 📋 Plantilla HTML para historias

Copia esta plantilla completa para crear una nueva historia:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Configuración básica de la página -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Título de la historia (aparece en la pestaña del navegador) -->
    <title>Nombre de tu Historia - Sanpiku</title>
    
    <!-- Estilos CSS para que la historia se vea bonita -->
    <style>
        /* Estilos generales del cuerpo de la página */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.8;
        }
        
        /* Contenedor principal de la historia */
        .historia-contenedor {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        /* Título principal de la historia */
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        
        /* Subtítulos dentro de la historia */
        h2 {
            color: #34495e;
            margin-top: 30px;
        }
        
        /* Etiqueta de categoría */
        .categoria {
            background: #3498db;
            color: white;
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        /* Fecha de publicación */
        .fecha {
            color: #7f8c8d;
            font-size: 14px;
            margin-bottom: 20px;
        }
        
        /* Párrafos del contenido */
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        /* Botón para volver al inicio */
        .boton-volver {
            display: inline-block;
            margin-top: 30px;
            padding: 12px 25px;
            background: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }
        
        .boton-volver:hover {
            background: #2980b9;
        }
    </style>
</head>
<body>
    <!-- Contenedor principal de la historia -->
    <div class="historia-contenedor">
        
        <!-- Categoría de la historia (Mito, Leyenda, Refrán o Anécdota) -->
        <p class="categoria">Categoría: Mito</p>
        
        <!-- Título principal de tu historia -->
        <h1>El Título de tu Historia</h1>
        
        <!-- Fecha de publicación -->
        <p class="fecha">Publicado el: 3 de Agosto, 2026</p>
        
        <!-- AQUÍ EMPIEZA EL CONTENIDO DE TU HISTORIA -->
        
        <!-- Introducción o primer párrafo -->
        <p>
            Escribe aquí el primer párrafo de tu historia. Puedes introducir el tema,
            establecer el contexto o comenzar directamente con la narrativa.
        </p>
        
        <!-- Puedes añadir más párrafos según necesites -->
        <p>
            Este es otro párrafo de tu historia. Puedes añadir tantos párrafos como
            necesites para contar tu historia completa.
        </p>
        
        <!-- Si quieres, puedes añadir subtítulos para organizar mejor -->
        <h2>Un subtítulo para organizar (opcional)</h2>
        
        <p>
            Contenido bajo el subtítulo. Los subtítulos ayudan a organizar historias
            largas en secciones más fáciles de leer.
        </p>
        
        <!-- Más contenido de la historia -->
        <p>
            Continúa escribiendo tu historia aquí. Recuerda que cada párrafo nuevo
            debe estar dentro de las etiquetas &lt;p&gt; y &lt;/p&gt;
        </p>
        
        <!-- Conclusión o párrafo final -->
        <p>
            <strong>Conclusión o moraleja:</strong> Puedes finalizar con una reflexión,
            moraleja o conclusión de la historia.
        </p>
        
        <!-- Botón para volver a la página principal -->
        <a href="../index.html" class="boton-volver">← Volver al inicio</a>
        
    </div>
</body>
</html>
```

---

## 🔗 Cómo vincular tu historia desde index.html

Una vez que hayas creado tu archivo de historia, necesitas añadirla a la página principal:

### Opción 1: Añadir como tarjeta en el contenido principal

1. Abre el archivo `index.html` (está en la carpeta principal de Sanpiku)
2. Busca la sección `<!-- Grid de tarjetas de historias -->`
3. Copia una de las tarjetas existentes
4. Modifica estos campos:
   - **data-categoria**: mitos, leyendas, refranes o anecdotas
   - **Título**: El nombre de tu historia
   - **Extracto**: Un resumen breve (2-3 líneas)
   - **href en "Leer más"**: La ruta a tu archivo (ejemplo: `historias-sanpk/mito-nuevo.html`)

**Ejemplo de código para añadir:**

```html
<div class="historia-card" data-categoria="mitos">
    <div class="card-header">
        <h3>🌟 El Título de tu Nueva Historia</h3>
        <span class="categoria-badge">Mito</span>
    </div>
    <div class="card-content">
        <p class="extracto">
            Escribe aquí un resumen breve y atractivo de tu historia
            para que los lectores sepan de qué trata...
        </p>
        <button class="btn-leer-mas">Ver más ▼</button>
        <div class="contenido-completo">
            <p>
                Este es el contenido completo que se mostrará cuando el usuario
                haga clic en "Ver más". Puedes poner aquí más detalles o...
            </p>
            <a href="historias-sanpk/mito-nuevo.html" class="btn-completo" target="_blank">
                Leer historia completa →
            </a>
        </div>
    </div>
</div>
```

---

## ✅ Buenas prácticas y recomendaciones

### Para el contenido:
- ✍️ **Escribe con claridad**: Usa un lenguaje sencillo y directo
- 📏 **Párrafos cortos**: Los párrafos de 3-4 líneas son más fáciles de leer
- 🎯 **Título atractivo**: Elige un título que capture la atención
- 📝 **Revisa ortografía**: Verifica tu texto antes de publicar

### Para los archivos:
- 💾 **Guarda frecuentemente**: No pierdas tu trabajo
- 🔍 **Prueba en el navegador**: Abre el archivo para verificar que se ve bien
- 📁 **Usa nombres descriptivos**: El nombre del archivo debe reflejar el contenido
- 🔄 **Haz copias de seguridad**: Guarda una copia de tus historias importantes

### Para la organización:
- 📂 **Mantén el orden**: Todos los archivos de historias van en esta carpeta
- 🏷️ **Categoriza correctamente**: Asegúrate de usar la categoría correcta
- 📅 **Actualiza las fechas**: Usa la fecha correcta de publicación
- 🔗 **Verifica los enlaces**: Asegúrate de que el botón "Volver" funcione

---

## 🆘 Solución de problemas comunes

### ❓ "Mi historia no se ve con los estilos"
- ✅ Verifica que copiaste toda la plantilla completa
- ✅ Asegúrate de que el código CSS esté dentro de las etiquetas `<style>...</style>`

### ❓ "El botón 'Volver' no funciona"
- ✅ Verifica que la ruta sea `../index.html` (con dos puntos al inicio)
- ✅ Asegúrate de que el archivo esté guardado dentro de la carpeta historias-sanpk/

### ❓ "Mi historia no aparece en el index.html"
- ✅ Debes añadir manualmente una tarjeta en el index.html (ver sección anterior)
- ✅ Verifica que la ruta en el enlace sea correcta

### ❓ "Veo símbolos raros en lugar de tildes"
- ✅ Asegúrate de que la línea `<meta charset="UTF-8">` esté en el código
- ✅ Guarda el archivo con codificación UTF-8 en tu editor

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas o problemas:
1. Revisa esta guía nuevamente
2. Verifica los ejemplos incluidos en el proyecto
3. Compara tu código con la plantilla original

---

## 📌 Resumen rápido

1. ✅ Crea un archivo .html con nombre descriptivo
2. ✅ Copia la plantilla completa
3. ✅ Personaliza título, categoría, fecha y contenido
4. ✅ Guarda el archivo en esta carpeta (historias-sanpk/)
5. ✅ Añade una tarjeta en index.html para mostrarla
6. ✅ Prueba que todo funcione correctamente

---

**¡Listo para crear historias increíbles! 🎉**

Recuerda: No necesitas ser un experto en programación. Solo sigue esta guía paso a paso y podrás añadir todas las historias que quieras al proyecto Sanpiku.
