# Base image for Node.js environment
FROM node:20-alpine

# Create a working directory
WORKDIR /app/frontend

# Copy package.json
COPY frontend/package.json .

# Install Node.js dependencies
RUN npm install

# Copy your React with Typescript code
COPY frontend . .

# Expose port for React development server (adjust based on your app)
EXPOSE 3000

# Command to run the React development server
CMD ["npm", "start"]