FROM node:14
COPY ["package.json", "tsconfig.build.json", "/usr/src/"]
WORKDIR /usr/src
RUN npm install
ADD src /usr/src/src
COPY ["nest-cli.json", "tsconfig.json", "./"]
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
