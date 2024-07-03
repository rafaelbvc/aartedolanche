FROM node:21.7.1

LABEL maintainer="aartedolanche_frontend"

RUN mkdir -p /aartedolanche/frontend/node_modules && chown -R node:node /aartedolanche/frontend

WORKDIR /aartedolanche/frontend

COPY package*json ./

RUN npm install

# RUN npm run dev
# production environment
# RUN npm run build

COPY --chown=node:node . .

EXPOSE 4050

CMD [ "npm" , "run", "dev" ]