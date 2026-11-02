# Portfolio Caterina Bustamante

## Proyecto
- Sitio estático HTML/CSS/JS, sin frameworks ni build step.
- Se publica tal cual desde la raíz en GitHub Pages, con el dominio caterinabustamante.es. Todo lo que se commitee es público: no guardar aquí nada que no deba serlo.
- Material original en ../portfolio-material (solo lectura): páginas en portfolio-artefactos/, imágenes PNG en portfolio-imagenes-png/. Es referencia de contenido y diseño.
- Links internos siempre relativos. No se copian links a claude.ai; única excepción: el botón del prototipo de third-party-portal.

## Estructura y contenido
- Español en / y /work/<caso>/; inglés en /en/ y /en/work/<caso>/. Casos: third-party-portal, tecno-fast-rental, image-processor, visita-lco.
- UX Partner no se publica. Tecno Fast Home es solo un link externo.
- Ubicación: "Product Designer based in Spain. Open to remote roles." (ES: "Product Designer · España y remoto."). Nunca "Barcelona / remote".
- No cambiar el tono ni los textos de los casos sin preguntar.

## Idiomas
- Nunca mover /en/. Misma estructura en los dos idiomas; todo cambio de texto o página nueva se hace en ambos.
- Selector de idioma en la cabecera, hacia la página equivalente, nunca al home. Cada página lleva canonical propio y hreflang es/en.
- Sin redirección automática por idioma del navegador.
- Español: tuteo en la interfaz y redacción neutra en cuanto a género donde sea posible.

## Reglas técnicas
- Solo canonical, hreflang y Open Graph llevan URL absoluta, siempre https://caterinabustamante.es.
- Nombres de archivo en minúsculas, sin espacios ni tildes.
- Estilos compartidos en un solo CSS con tokens. Nada de estilos duplicados por página.
- Imágenes en WebP comprimidas, con alt en el idioma de la página. Excepción: las imágenes Open Graph van en JPG por compatibilidad con redes.
- Hacer commit al cerrar cada paso, con mensaje descriptivo.

## Responsive
- Revisar a 375, 768 y 1280 px y mostrar capturas antes de dar algo por terminado.

## Publicación
- CNAME (caterinabustamante.es) y .nojekyll deben existir en la raíz y no estar en .gitignore.
- Nunca incluir robots.txt con "Disallow: /".
- Antes de lanzar: sin links rotos y sin links a claude.ai (salvo el del prototipo).
