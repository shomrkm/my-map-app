FROM node:14.17-alpine

ENV PROJECT_ROOTDIR /usr/src/neiw-app

WORKDIR $PROJECT_ROOTDIR

#COPY package.json tsconfig.json $PROJECT_ROOTDIR

#RUN yarn install

#COPY . $PROJECT_ROOTDIR

EXPOSE 3000

#CMD ["yarn", "start"]
