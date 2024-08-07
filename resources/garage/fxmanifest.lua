fx_version 'cerulean'
game 'gta5'

author 'Seu Nome'
description 'Sistema de Garagem para FiveM'
version '1.0.0'


lua54 'yes'

-- ui_page './app/build/index.html'

ui_page 'web/build/index.html'


client_script 'script.lua'


files {
    'app/build/index.html',
    'app/build/**/*'
}
