FROM node:16
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
expose 3000
CMD ["npm","start"]