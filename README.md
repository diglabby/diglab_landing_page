## Як усталяваць:

- Спачатку усталюйце апошнюю версію nodejs [Node](https://nodejs.org/)

### Каб разгарнўць сайт трэба разгарнуць рэпазіторыі ў спісе "Гарачыя лінкі" па наступнай чарзе.
    1. Спачатку асноўны рэпазіторый:
 
```
git clone https://github.com/diglabby/diglab_landing_page && cd diglab_landing_page  
```

    2. Пасля модуль ахвараванняў: 
```
git clone https://github.com/diglabby/dl_doika-1
Прытрымлівацца інструкцый рэпазітара [dl_doika-1](https://github.com/diglabby/dl_doika-1) 
```

    3. Пасля модуль чата на старонцы:
 
```
git clone https://github.com/diglabby/chat-widget-for-slack && 
cd chat-widget-for-slack && npm i && cd ..
Прытрымлівацца інструкцый рэпазітара [hat-widget-for-slack](https://github.com/diglabby/chat-widget-for-slack), 
альбо перанесці файл [slackChatWidget](https://github.com/diglabby/chat-widget-for-slack/archive/Latest.zip) у корань
ды падключыць скрыпты
```
   
    4. Пасля модуль гіт-хаб актыунасцяў: 
```
git clone https://github.com/diglabby/github-activity && 
cd github-activity && npm i && cd ..
```
   
**++ Важна ++**
Папкі з модулямі 2,3,4 прапісаць у .gitignore асноўнага рэпазіторыя, каб код не наблытаўся. 
Звярніце ўвагу, што дубляваць Jquery не трэба.

echo " 
/github-activity
/dl_doika-1
/chat-widget-for-slack " >> .gitignore
