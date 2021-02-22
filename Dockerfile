FROM node as base

RUN mkdir /app
RUN mkdir /publish 

WORKDIR /app

RUN npm install -g @angular/cli

ADD ./package.json ./

RUN npm install

ADD ./ ./

RUN ng build --output-path /publish/

FROM nginx
COPY --from=base /publish/ /usr/share/nginx/html