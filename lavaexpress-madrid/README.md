# LavaExpress Madrid - Lavandería a Domicilio

Web de servicio de lavandería a domicilio en Madrid Centro.

## 📋 Cómo subir esta web a Vercel

### Opción 1: Subir directamente a Vercel (LA MÁS FÁCIL)

1. **Descarga todos los archivos**
   - Crea una carpeta en tu ordenador llamada `lavaexpress-madrid`
   - Copia todos los archivos que te he proporcionado en esta carpeta siguiendo la estructura indicada abajo

2. **Estructura de carpetas que debes crear:**
   ```
   lavaexpress-madrid/
   ├── src/
   │   ├── App.jsx
   │   ├── main.jsx
   │   └── index.css
   ├── index.html
   ├── package.json
   ├── vite.config.js
   ├── tailwind.config.js
   ├── postcss.config.js
   └── README.md
   ```

3. **Ve a Vercel**
   - Accede a [vercel.com](https://vercel.com)
   - Crea una cuenta gratis (puedes usar tu email o GitHub)
   - Haz clic en "Add New Project"

4. **Sube tu proyecto**
   - En la pantalla de nuevo proyecto, arrastra la carpeta `lavaexpress-madrid` completa
   - O haz clic en "Browse" y selecciona la carpeta
   - Vercel detectará automáticamente que es un proyecto Vite + React
   - Haz clic en "Deploy"

5. **¡Listo!**
   - En 2-3 minutos tu web estará online
   - Vercel te dará una URL como: `lavaexpress-madrid.vercel.app`
   - Puedes compartir esa URL con tus clientes

### Opción 2: Usando GitHub (Más profesional)

1. Crea una cuenta en [GitHub](https://github.com)
2. Crea un nuevo repositorio llamado `lavaexpress-madrid`
3. Sube todos los archivos al repositorio
4. En Vercel, conecta tu cuenta de GitHub
5. Importa el repositorio y despliega

## 🔧 Para desarrollo local (opcional)

Si quieres ver la web en tu ordenador antes de subirla:

1. Instala [Node.js](https://nodejs.org/) (versión 18 o superior)
2. Abre la terminal/consola en la carpeta del proyecto
3. Ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📝 Personalización

Para personalizar la web, edita estos archivos:

- **src/App.jsx**: Contenido principal, servicios, precios
- **index.html**: Título de la página, descripción SEO
- **src/index.css**: Estilos generales (si necesitas cambiar colores)

## 🎨 Cambiar nombre del negocio

En `src/App.jsx`, busca y reemplaza "LavaExpress Madrid" por el nombre de tu negocio.

## 💳 Integrar pasarela de pagos real

Actualmente la web simula el proceso de pago. Para integrar una pasarela real:

1. **Stripe** (recomendado): [stripe.com/es](https://stripe.com/es)
2. **Redsys** (bancos españoles): Contacta con tu banco

Te puedo ayudar a integrar cualquiera de estas opciones cuando estés listo.

## 🆘 Soporte

Si tienes problemas:
- Revisa que todos los archivos estén en las carpetas correctas
- Verifica que los nombres de archivo coincidan exactamente
- Asegúrate de tener conexión a internet al desplegar

## 📱 Próximos pasos recomendados

1. ✅ Sube la web a Vercel
2. ✅ Comparte la URL con amigos para obtener feedback
3. ✅ Consigue tus primeros clientes
4. ✅ Compra un dominio personalizado (ej: lavaexpressmadrid.es)
5. ✅ Conecta el dominio a tu proyecto en Vercel
6. ✅ Integra una pasarela de pagos real

¡Mucho éxito con tu negocio! 🚀