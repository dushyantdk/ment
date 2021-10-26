FROM node:12 AS builder
WORKDIR /home/node
COPY . .
RUN yarn install && yarn build
FROM nginx:alpine AS production
WORKDIR /usr/share/nginx/html
COPY --from=builder --chown=nginx:nginx /home/node/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN echo '1/4 Create "site" directory'
RUN mkdir site
RUN echo '2/4 Move relevant files'
RUN mv static/* site
RUN echo '3/4 Replace file references'
RUN find ./ -type f -exec sed -i 's/static/site/g' {} \;
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]