# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Claro, aquí tienes el markdown listo para tu README:

```markdown
# 🚀 Despliegue del Proyecto UNSA en el Clúster Hadoop

## 1. Prepara el archivo en tu PC (PowerShell)

Abre una terminal en tu computadora (donde tienes tu proyecto de la UNSA) y ejecuta el comando para crear el `.zip`. Esto empaquetará solo lo necesario:

```powershell
Compress-Archive -Path src, public, index.html, package.json, vite.config.js, eslint.config.js -DestinationPath proyecto01.zip
```

## 2. Sube el proyecto al Master

Desde la misma terminal de tu PC, envía el archivo al Master usando la IP pública que ya conocemos (`18.206.58.97`) y tu llave:

```powershell
scp -i "hadoop-onpe-key.pem" proyecto01.zip ubuntu@18.206.58.97:~/
```

## 3. Instala Node.js en el Master

Vuelve a tu conexión SSH en el Master y ejecuta los comandos de instalación de Node.js (son vitales para procesar proyectos de React/Vite):

```bash
# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs unzip

# Verificar
node -v
```

## 4. Construye y Despliega

Ahora que el archivo está en el Master, ejecuta la construcción:

```bash
cd ~
unzip proyecto01.zip -d proyecto01
cd proyecto01

# Instalar dependencias y generar la carpeta /dist
npm install --legacy-peer-deps
npm run build

# Mover el resultado a la carpeta de Nginx
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```

## 5. Configuración Crítica de Nginx

Como tu proyecto es probablemente una **SPA** (Single Page Application), no olvides el bloque `sudo tee /etc/nginx/sites-available/default` de tu guía. Esto es lo que permite que las rutas de tu página funcionen correctamente.

## 📝 Recordatorio sobre el Puerto 80

Como estás usando el método de Bash para tu clúster de Hadoop, no tienes acceso a la consola de AWS "tradicional" de manera tan fácil. Puedes abrir el puerto 80 ejecutando este comando desde tu PC local (donde tienes el AWS CLI configurado):

```bash
aws ec2 authorize-security-group-ingress --group-name hadoop-onpe-sg --protocol tcp --port 80 --cidr 0.0.0.0/0
```

Una vez que reinicies Nginx (`sudo systemctl restart nginx`), podrás entrar a **http://18.206.58.97** y ver tu página web funcionando junto con tu clúster de Big Data.

---

⚡ **¡Dale con todo a ese despliegue!**
```
