FROM node:21.7.1

LABEL maintainer="aartedolanche_frontend"

WORKDIR /aartedolanche/frontend

COPY package*json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4050

CMD ["npm", "run", "start"]
