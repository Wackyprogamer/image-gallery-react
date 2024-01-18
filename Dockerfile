# Use an official Node runtime as the base image
FROM node:latest

# Set up Web name or Alias
LABEL maintainer="Sergio Castillo"

LABEL cohort="17"

LABEL description="Image Gallery Application via React"

LABEL animal="Husky"

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the root directory in the Docker image
COPY package*.json ./

# Install the application dependencies inside the Docker image
RUN npm install

# Copy the rest of your application's source code from your local filesystem into the Docker image
COPY . .

# Make port 3000 available outside the Docker image
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
