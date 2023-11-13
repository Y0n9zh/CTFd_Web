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
highlight "1. View Docker-Web parent-image or sub-image"
highlight "2. Build Docker-Web parent-image"
highlight "3. Build Docker-Web sub-image"
highlight "4. Delete Docker-Web parent-image"
highlight "5. Delete Docker-Web sub-image"
highlight "6. Delete dangling-image"
highlight "7. Export parent-image"
highlight "8. Import parent-image"


read -e -p "Please enter the option number (1-8): " choice

case $choice in
  1)
    read -e -p "View Docker-Web parent-image or sub-image (y-1|n-2): " select
    num=1;
    if [ $select = 'y' ] || [ $select = "1" ] 2>/dev/null; then
      for image_name in $(docker images --format "{{.Repository}}" | grep ctfhub); do
        highlight "$num - $image_name"
        ((num++))
      done
    elif [ $select = 'n' ] || [ $select = "2" ] 2>/dev/null; then
      for image_name in $(docker images --format "{{.Repository}}" | grep -v ctfhub); do
        highlight "$num - $image_name"
        ((num++))
      done
    fi
    ;;
  2)
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
  3)
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
  4)
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
  5)
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
  6)
    highlight 'Deleting, Please wait ~'
    docker rmi $(docker images -f "dangling=true" -q)
    num=1;
    for image_name in $(docker images --format "{{.Repository}}" | grep -v ctfhub); do
      highlight "$num - $image_name"
      ((num++))
    done
    ;;
  7)
    default_save_path="."
    read -e -p "Save Directory (Default current directory .): " save_path
    save_path=${save_path:-$default_save_path}
    num=1
    if [ ! -d $save_path ]; then
        mkdir $save_path &>/dev/null
    fi
    read -e -p "Whether to export all parent-image (y-1|n-2): " select
    if [ $select = 'y' ] || [ $select = "1" ] 2>/dev/null; then
      time docker save $(docker images --format "{{.Repository}}" | grep ctfhub) -o $save_path/all_parent-image.tar
      highlight "Image Save Path: $save_path/all_parent-image.tar"
    elif [ $select = 'n' ] || [ $select = "2" ] 2>/dev/null; then
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
      highlight "Selected tar: $select_image"
      file_name=$(echo "$select_image" | awk -F'/' '{print $2}')
      time docker save $select_image -o $save_path/${file_name}.tar
      highlight "Image Save Path: $save_path/${file_name}.tar"
    fi
    ;;
  8)
    default_load_path="."
    read -e -p "Load Directory (Default current directory .): " load_path
    load_path=${load_path:-$default_load_path}
    num=1
    if [ -d $load_path ] 2>/dev/null; then
      for image_name in $(find $load_path -name "*.tar"); do
        highlight "$num - $image_name"
        ((num++))
      done
    fi
    read -e -p 'Please select an image (Select label): ' parent_image_number
    num=1
    select_image=""
    for image_name in $(find $load_path -name "*.tar"); do
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
    highlight "Selected tar: $select_image"
    time docker load -i ${image_name}
    docker images --format "{{.Repository}}" | grep ctfhub
    ;;
  *)
    echo "Invalid option !"
    ;;
esac

