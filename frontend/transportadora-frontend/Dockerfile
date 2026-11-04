# Estágio 1: Build da aplicação Angular
FROM node:22-alpine AS build
WORKDIR /app

# Copia dependências e instala
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copia o código-fonte e executa a build de produção
COPY . .
RUN npm run build

# Estágio 2: Servidor Nginx para servir o frontend
FROM nginx:alpine

# Copia os arquivos gerados no build para o Nginx
COPY --from=build /app/dist/transportadora-frontend/browser /usr/share/nginx/html

# Copia a configuração personalizada do Nginx com suporte a rotas e proxy da API
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
