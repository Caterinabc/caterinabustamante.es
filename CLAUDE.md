# Portfolio Caterina Bustamante

## Proyecto
- Sitio estático HTML/CSS/JS, sin frameworks ni build step.
- La raíz de este repo se publica tal cual en Hostinger. No guardar aquí nada que no deba ser público.
- Material original en ../portfolio-material (solo lectura): páginas en portfolio-artefactos/, imágenes PNG en portfolio-imagenes-png/.
- Los artefactos son referencia de contenido y diseño. Sus links a claude.ai no se copian: todo link interno es una ruta relativa del sitio.

## Estructura y contenido
- /en/ home
- /en/work/third-party-portal/, /en/work/tecno-fast-rental/, /en/work/image-processor/, /en/work/visita-lco/
- UX Partner no se publica. Tecno Fast Home es solo un link externo.
- Ubicación: "Product Designer based in Spain. Open to remote roles." Nunca "Barcelona / remote".
- No cambiar el tono ni los textos de los casos sin preguntar.

## Idiomas
- Lanzamiento solo en inglés: el sitio vive en /en/ y la raíz redirige con 302 a /en/.
- Después: español en la raíz (/) con la misma estructura, y se quita la redirección. Nunca mover /en/.
- Selector de idioma y hreflang solo cuando exista el español. El selector lleva a la página equivalente, nunca al home.
- Sin redirección automática por idioma del navegador.

## Reglas técnicas
- Rutas relativas en links e imágenes. Solo canonical, hreflang y Open Graph llevan URL absoluta, siempre https://caterinabustamante.es.
- Nombres de archivo en minúsculas, sin espacios ni tildes.
- Estilos compartidos en un solo CSS con tokens. Nada de estilos duplicados por página.
- Imágenes en WebP comprimidas, con alt en el idioma de la página.
- .htaccess debe bloquear acceso a /.git y a archivos .md.
- Hacer commit al cerrar cada paso, con mensaje descriptivo.

## Responsive
- Revisar a 375, 768 y 1280 px y mostrar capturas antes de dar algo por terminado.

## Publicación
- Staging: new.caterinabustamante.es, protegido con contraseña desde hPanel.
- Nunca incluir robots.txt con "Disallow: /".
- Antes de lanzar: sin links rotos, sin links a claude.ai ni a "new.", y redirección 302 de / a /en/ en .htaccess.
