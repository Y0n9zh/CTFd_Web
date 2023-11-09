#!/bin/bash
highlight() {
  local text="$1"
  echo -e "\e[32m$text\e[0m"
}

file_path="/usr/sbin/example_file"

if [ -f "$file_path" ] 2>/dev/null; then
  highlight "The file exists in /usr/sbin."
else
  highlight "The file does not exist in /usr/sbin."
  cp cweb.sh /usr/sbin/
  highlight "The file can be moved to /usr/sbin."
fi

echo "Please select an option: "
highlight "1. Build Docker-Web parent-image"
highlight "2. Build Docker-Web sub-image"
highlight "3. Delete Docker-Web parent-image"
highlight "4. Delete Docker-Web sub-image"
highlight "5. Delete dangling image"

read -e -p "Please enter the option number (1-5): " choice

case $choice in
  1)
    read -e -p "Whether to build all parent-images (y-1|n-2): " select
    num=1;
    if [ $select = 'y' ] || [ $select = "1" ] 2>/dev/null; then
      highlight 'Creating, Please wait ~'
      find parent_image -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    elif [ $select = 'n' ] || [ $select = "2" ] 2>/dev/null; then
      for image_name in $(find parent_image -name "docker-compose.yml"); do
        highlight "$num - $image_name"
        ((num++))
      done
      read -e -p 'Please select an image (Select label): ' parent_image_number
      num=1
      select_image=""
      for image_name in $(find parent_image -name "docker-compose.yml"); do
        if [ $num -eq $parent_image_number ] 2>/dev/null; then
          select_image=$image_name
          break
        fi
        ((num++))
      done
      if [ -z $select_image ] 2>/dev/null; then
        highlight "Invalid choice. Exiting."
        exit 1
      fi
      highlight "Selected image: $select_image"
      docker-compose -f $select_image build
    fi
    ;;
  2)
    read -e -p "Whether to build all sub-image (y-1|n-2): " select
    num=1;
    if [ $select = 'y' ] || [ $select = "1" ] 2>/dev/null; then
      highlight 'Creating, Please wait ~'
      find -not -path "./parent_image/*" -name "docker-compose.yml" -execdir docker-compose -f {} build \;
    elif [ $select = 'n' ] || [ $select = "2" ] 2>/dev/null; then
      for image_name in $(find -not -path "./parent_image/*" -name "docker-compose.yml"); do
        highlight "$num - $image_name"
        ((num++))
      done
      read -e -p 'Please select an image (Select label): ' parent_image_number
      num=1
      select_image=""
      for image_name in $(find -not -path "./parent_image/*" -name "docker-compose.yml"); do
        if [ $num -eq $parent_image_number ] 2>/dev/null; then
          select_image=$image_name
          break
        fi
        ((num++))
      done
      if [ -z $select_image ] 2>/dev/null; then
        highlight "Invalid choice. Exiting."
        exit 1
      fi
      highlight "Selected image: $select_image"
      docker-compose -f $select_image build
    fi
    ;;
  3)
    num=1;
    for image_name in $(docker images --format "{{.Repository}}" | grep ctfhub); do
      highlight "$num - $image_name"
      ((num++))
    done
    read -e -p 'Please select an image (Select label): ' parent_image_number
    num=1
    select_image=""
    for image_name in $(docker images --format "{{.Repository}}" | grep ctfhub); do
      if [ $num -eq $parent_image_number ] 2>/dev/null; then
        select_image=$image_name
        break
      fi
      ((num++))
    done
    if [ -z $select_image ] 2>/dev/null; then
      highlight "Invalid choice. Exiting."
      exit 1
    fi
    highlight "Selected image: $select_image"
    docker rmi -f $select_image
    ;;
  4)
    num=1;
    for image_name in $(docker images --format "{{.Repository}}" | grep -v ctfhub); do
      highlight "$num - $image_name"
      ((num++))
    done
    read -e -p 'Please select an image (Select label): ' parent_image_number
    num=1
    select_image=""
    for image_name in $(docker images --format "{{.Repository}}" | grep -v ctfhub); do
      if [ $num -eq $parent_image_number ] 2>/dev/null; then
        select_image=$image_name
        break
      fi
      ((num++))
    done
    if [ -z $select_image ] 2>/dev/null; then
      highlight "Invalid choice. Exiting."
      exit 1
    fi
    highlight "Selected image: $select_image"
    docker rmi -f $select_image
    ;;
  5)
    highlight 'Deleting, Please wait ~'
    docker rmi $(docker images -f "dangling=true" -q)
    num=1;
    for image_name in $(docker images --format "{{.Repository}}" | grep -v ctfhub); do
      highlight "$num - $image_name"
      ((num++))
    done
    ;;
  *)
    echo "Invalid option !"
    ;;
esac

