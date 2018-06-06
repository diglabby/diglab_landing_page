#!/bin/bash
SETCOLOR_SUCCESS="echo -en \\033[1;32m"
SETCOLOR_FAILURE="echo -en \\033[1;31m"
SETCOLOR_NORMAL="echo -en \\033[0;39m"

echo -e "\e[31m------------------------ \e[0m"
echo -e "\e[31m  Дадаю дадзеныя у файл .gitignore \e[0m" 
echo -e "\e[31m------------------------ \e[0m"

echo " 
/github-activity
/dl_doika-1
/chat-widget-for-slack " >> .gitignore

if [ $? -eq 0 ]; then
    $SETCOLOR_SUCCESS
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[OK]"
    $SETCOLOR_NORMAL
    echo
else
    $SETCOLOR_FAILURE
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[fail]"
    $SETCOLOR_NORMAL
    echo
fi
echo -e "\e[31m------------------------ \e[0m"
echo -e "\e[31m  Кланую  модуль дзеля ахваряванняў \e[0m" 
echo -e "\e[31m------------------------ \e[0m"

git clone https://github.com/diglabby/dl_doika-1

if [ $? -eq 0 ]; then
    $SETCOLOR_SUCCESS
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[OK]"
    $SETCOLOR_NORMAL
    echo
else
    $SETCOLOR_FAILURE
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[fail]"
    $SETCOLOR_NORMAL
    echo
fi
echo -e "\e[31m------------------------ \e[0m"
echo -e "\e[31m  Кланую і усталевываю пакеты модуля чата \e[0m" 
echo -e "\e[31m------------------------ \e[0m"

git clone https://github.com/diglabby/chat-widget-for-slack 

if [ $? -eq 0 ]; then
    $SETCOLOR_SUCCESS
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[OK]"
    $SETCOLOR_NORMAL
    echo
else
    $SETCOLOR_FAILURE
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[fail]"
    $SETCOLOR_NORMAL
    echo
fi 

echo -e "\e[31m------------------------ \e[0m"
echo -e "\e[31m  Кланую і усталевываю пакеты модуля github актыунасцяў \e[0m" 
echo -e "\e[31m------------------------ \e[0m"

git clone https://github.com/diglabby/github-activity 

if [ $? -eq 0 ]; then
    $SETCOLOR_SUCCESS
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[OK]"
    $SETCOLOR_NORMAL
    echo
else
    $SETCOLOR_FAILURE
    echo -n "$(tput hpa $(tput cols))$(tput cub 6)[fail]"
    $SETCOLOR_NORMAL
    echo
fi

echo -e "\e[31m------------------------ \e[0m"
echo -e "\e[31m  Усе прайшло добра, карыстайцесь ! \e[0m" 
echo -e "\e[31m------------------------ \e[0m"