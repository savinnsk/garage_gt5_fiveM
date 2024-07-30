fx_version 'cerulean'
game 'gta5'

author 'Seu Nome'
description 'Sistema de Garagem para FiveM'
version '1.0.0'

server_scripts {
    'dist/server/*.js'
}

client_scripts {
    'dist/client/*.js'
}

dependencies {
    'mysql-async'
}
