# Base image
FROM node:14.15.4-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build --prod

# Expose port
EXPOSE 80

# Start the app
CMD ["npm", "run", "start"]
