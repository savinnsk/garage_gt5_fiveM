console.log('Script do cliente carregado.');

// Mostra a interface de usuário do React quando o jogador usa o comando 'garage'
RegisterCommand('garage', () => {
    console.log('Comando /garage chamado.');
    SetNuiFocus(true, true);
    SendNuiMessage(JSON.stringify({
        type: 'openGarage'
    }));
}, false);

// Listener para mensagens NUI
RegisterNuiCallbackType('closeUI');
on('__cfx_nui:closeUI', (data, cb) => {
    console.log('Mensagem NUI recebida: closeUI');
    SetNuiFocus(false, false);
    cb({});
});