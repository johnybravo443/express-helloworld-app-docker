To run the project locally, Use either of the commands to run the project:
1. npm start
2. node index.js

And open http://localhost:3000 on your browser

################################################

To run the project in a docker container, follow these steps
1. Do to the basedir of the project.
2. Create docker image using command: docker build -t my-hw-app:1.0 .
3. Run the container: docker run -d -p 3001:3000  --name hw-app-container my-hw-app:1.0
4. Open url http://localhost:3001 