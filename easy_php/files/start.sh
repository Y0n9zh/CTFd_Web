#!/bin/bash
sed -i 's/^register_argc_argv = Off/register_argc_argv = On/' /usr/local/etc/php/php.ini
echo start example