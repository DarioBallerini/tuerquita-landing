# Sitio de Tuerquita

HTML, CSS y JS estáticos. No hay build, no hay dependencias, no hay npm. Se sube tal cual.

```
site/
├─ index.html          landing
├─ privacidad.html     política de privacidad (esta es la URL que pide Google Play)
├─ app.js              acordeón de preguntas + el link a Google Play
├─ css/
│  ├─ styles.css       único archivo que se linkea; importa los tokens
│  └─ tokens/*.css     colores, tipografía, espaciado, radios, motion (del design system)
├─ assets/             logo, ícono de la app, captura de la pantalla de inicio
├─ robots.txt · sitemap.xml
└─ .nojekyll           para que GitHub Pages sirva los archivos sin procesarlos
```

Inter y Material Symbols se cargan desde el CDN de Google Fonts (ver `css/tokens/fonts.css`).

## Lo único que tenés que editar cuando se publique la app

Abrí `app.js` y pegá la URL de la ficha en Google Play en la primera línea:

```js
var PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=TU.PACKAGE.ID';
```

Con eso, los dos botones que hoy dicen **Pronto en Google Play** pasan a decir **Descargar en Google Play**
y apuntan a la ficha. No hace falta tocar el HTML.

## Antes de subirlo, revisá

1. **El mail de contacto.** Se usan tres casillas bajo `mail.tuerquita.com`: `ayuda@` para contacto
   general (footer de `index.html`, `privacidad.html` y `eliminar-cuenta.html`), `privacidad@` para
   ejercicio de derechos y consultas sobre la política (puntos 1 y 9), y `baja@` para pedidos de baja
   de cuenta (punto 8 y `eliminar-cuenta.html`). Si las casillas reales son otras, buscá y reemplazá.
2. **El dominio.** `tuerquita.com` aparece en las etiquetas `canonical`, `og:image`, `robots.txt` y
   `sitemap.xml`. Cambialo si vas a usar otro.
3. **La política de privacidad.** Está escrita sobre lo que me contaste: cuenta con mail y contraseña o
   login con Google, datos del auto (incluida la patente, opcional), services, cargas, recordatorios,
   problemas, fotos, el manual en PDF, Firebase/Google Cloud, un servicio de mail transaccional y un
   proveedor externo de modelos de lenguaje. Si algo de eso cambia — por ejemplo, si agregás analytics,
   Crashlytics o pagos — hay que actualizar el texto **antes** de publicar la versión que lo use.
   No es asesoramiento legal.
4. **Razón social.** No se publica: la política dice que sos una persona física en Argentina y que los
   datos identificatorios completos se envían por mail a pedido. Google Play acepta esto, pero si en la
   consola te piden mostrar nombre y dirección, va en el punto 1.

## Deploy en GitHub Pages

Opción rápida: subí el contenido de `site/` a la raíz de un repo y activá Pages
(*Settings → Pages → Deploy from a branch → main / root*).

Si preferís mantener la carpeta `site/`, elegí *main / docs* y renombrá `site` a `docs`.

Con dominio propio: agregá un archivo `CNAME` con `tuerquita.com` adentro y apuntá el DNS a GitHub Pages.

## URL para la Google Play Console

```
https://tuerquita.com/privacidad.html
```
