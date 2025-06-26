# 1. Use an official Node image
FROM node:18

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy all files into the container
COPY . .

# 4. Install pnpm globally
RUN npm install -g pnpm

# 5. Install app dependencies
RUN pnpm install

# 6. Build the Next.js app
RUN pnpm build

# 7. Expose the port your app runs on
EXPOSE 3000

# 8. Start the app
CMD ["pnpm", "start"]
