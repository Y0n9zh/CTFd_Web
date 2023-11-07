#!/bin/bash

echo "请选择一个选项："
echo "1. docker-compose parent_image up"
echo "2. docker-compose topic up"
echo "3. docker-compose all up"

read -p "请输入选项的编号 (1-3): " choice

case $choice in
  1)
    find parent_image -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    echo "docker-compose parent_image up !"
    docker rmi $(docker images -f "dangling=true" -q)
    ;;
  2)
    find -not -path "./parent_image/*" -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    echo "docker-compose topic up !"
    docker rmi $(docker images -f "dangling=true" -q)
    ;;
  3)
    find parent_image -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    find -not -path "./parent_image/*" -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    echo "docker-compose all up"
    docker rmi $(docker images -f "dangling=true" -q)
    ;;
  *)
    echo "Invalid option !"
    ;;
esac

