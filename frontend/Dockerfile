# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port on which the Next.js application will run
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
