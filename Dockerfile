# 设置依赖的基础镜像
FROM node:latest as awesome-bookmarks

# 设置工作目录(相当于把你示例仓库里面的代码复制到这个目录下面)
WORKDIR /app

# 添加依赖
RUN npm i yarn -g && yarn install

# Dockerfile 比较特殊，每个命令都是一个独立的运行空间。彼此间毫无关联。
COPY . .

# 打包 
RUN yarn run build


# nginx
FROM nginx:alpine

# 删除旧文件
RUN rm -rf /root/www/awesome-bookmarks/*

# 把项目文件下的 default.conf (nginx的配置文件) 替换掉镜像内的
# COPY default.conf /etc/nginx/conf.d/default.conf
# --from=awesome-bookmarks  可看第一行代码 我把第一个镜像起了一个别名 awesome-bookmarks
# 从上一个镜像里面复制已经打包好的 dist 文件，到 /usr/share/nginx/html 目录
COPY --from=awesome-bookmarks /app/.vitepress/dist /root/www/awesome-bookmarks

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

