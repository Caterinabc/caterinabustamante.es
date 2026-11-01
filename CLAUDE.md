# Portfolio Caterina Bustamante

## Proyecto
- Sitio estático HTML/CSS/JS, sin frameworks ni build step.
- La raíz de este repo se publica tal cual en GitHub Pages, con el dominio propio caterinabustamante.es. Todo lo que se commitee es público, historial incluido: no guardar aquí nada que no deba serlo.
- Material original en ../portfolio-material (solo lectura): páginas en portfolio-artefactos/, imágenes PNG en portfolio-imagenes-png/.
- Los artefactos son referencia de contenido y diseño. Sus links a claude.ai no se copian: todo link interno es una ruta relativa del sitio. Única excepción, decidida por Caterina: el botón "View prototype" de third-party-portal enlaza a su artefacto de claude.ai (debe estar compartido públicamente).

## Estructura y contenido
- Inglés: /en/ (home) y /en/work/third-party-portal/, /en/work/tecno-fast-rental/, /en/work/image-processor/, /en/work/visita-lco/
- Español: / (home) y /work/ con los mismos 4 casos y los mismos nombres de carpeta.
- UX Partner no se publica. Tecno Fast Home es solo un link externo.
- Ubicación: "Product Designer based in Spain. Open to remote roles." (ES: "Product Designer con base en España. Disponible para trabajo remoto."). Nunca "Barcelona / remote".
- No cambiar el tono ni los textos de los casos sin preguntar.

## Idiomas
- Sitio bilingüe: español en la raíz (/) e inglés en /en/, con la misma estructura. Nunca mover /en/.
- No hay redirección de / a /en/ (GitHub Pages no la permite y ya no hace falta).
- Selector de idioma en la cabecera de cada página, hacia la página equivalente, nunca al home. Cada página lleva hreflang es/en y su propio canonical.
- Toda página nueva o cambio de texto se hace en los dos idiomas.
- Sin redirección automática por idioma del navegador.
- Español: tuteo en la interfaz y redacción neutra en cuanto a género donde sea posible.

## Reglas técnicas
- Rutas relativas en links e imágenes. Solo canonical, hreflang y Open Graph llevan URL absoluta, siempre https://caterinabustamante.es.
- Nombres de archivo en minúsculas, sin espacios ni tildes.
- Estilos compartidos en un solo CSS con tokens. Nada de estilos duplicados por página.
- Imágenes en WebP comprimidas, con alt en el idioma de la página.
- Mayúsculas y minúsculas: GitHub Pages distingue entre ellas, así que los nombres de archivo y las rutas coinciden exactamente.
- Hacer commit al cerrar cada paso, con mensaje descriptivo.

## Responsive
- Revisar a 375, 768 y 1280 px y mostrar capturas antes de dar algo por terminado.

## Publicación
- Hosting: GitHub Pages, publicando desde la raíz de la rama principal. Sin paso de build.
- Archivos que deben existir en la raíz: CNAME (una sola línea: caterinabustamante.es) y .nojekyll (vacío). No ignorarlos en .gitignore.
- No hay staging con contraseña: cualquier preview es público.
- .htaccess no funciona en GitHub Pages: no crearlo.
- Nunca incluir robots.txt con "Disallow: /".
- Antes de lanzar: sin links rotos, sin links a claude.ai (salvo el del prototipo) ni a "new.", y los puntos pendientes de la lista de memoria resueltos.
