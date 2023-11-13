#!/bin/bash

write_flag_in_fs() {
    # 将flag写入到文件系统中
    if [ -z "$1" ]; then
        flag_path="/flag"
    else
        flag_path="$1"
    fi
    echo ${FLAG} > ${flag_path}
}

write_flag_in_fs /flag_change

export FLAG=not_flag
FLAG=not_flag