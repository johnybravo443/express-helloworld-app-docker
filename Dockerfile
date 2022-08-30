FROM node:14

#Create app directory
WORKDIR /app

#install app dependencies
COPY package*.json ./
RUN npm install

#Copy rest of the application to the app directory
COPY . .

#expose port
EXPOSE 3000

#start the app
CMD ["node","index.js"]