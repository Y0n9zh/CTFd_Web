#!/bin/bash
<<PROMPT
请根据需要自行修改此脚本，确保flag能够放置在正确位置
FLAG 平台传入的正确的flag

将flag写入到文件系统中
# 默认写入/flag
write_flag_in_fs

# 写入至web目录 /var/www/html/flag.txt
write_flag_in_fs /var/www/html/flag.txt

PROMPT

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