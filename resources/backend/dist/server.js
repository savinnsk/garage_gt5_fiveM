/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fivem_1 = require("fivem");
(0, fivem_1.RegisterCommand)('spawncar', (source, args) => {
    const vehicleName = args[0];
    if (vehicleName) {
        const playerPed = (0, fivem_1.GetPlayerPed)(-1);
        const vehicleHash = (0, fivem_1.GetHashKey)(vehicleName);
        //    RequestModel(vehicleHash);
        const checkModelLoaded = setInterval(() => {
            if ((0, fivem_1.HasModelLoaded)(vehicleHash)) {
                clearInterval(checkModelLoaded);
                const coords = (0, fivem_1.GetEntityCoords)(playerPed, false);
                const heading = (0, fivem_1.GetEntityHeading)(playerPed);
                const vehicle = (0, fivem_1.CreateVehicle)(vehicleHash, coords[0], coords[1], coords[2], heading, true, false);
                (0, fivem_1.TaskWarpPedIntoVehicle)(playerPed, vehicle, -1);
                (0, fivem_1.SetVehicleNumberPlateText)(vehicle, "ADMIN");
            }
        }, 500);
    }
    else {
        (0, fivem_1.emit)('chat:addMessage', {
            color: [255, 0, 0],
            multiline: true,
            args: ['[ERRO]', 'Você precisa especificar o nome do veículo.']
        });
    }
}, false);
(0, fivem_1.RegisterCommand)('getVehicles', (source) => {
    console.log('Evento getVehicles recebido do cliente:', source);
    const vehicles = [
        { id: 1, model: 'adder', plate: 'ABC123' },
        { id: 2, model: 'zentorno', plate: 'XYZ789' }
    ];
    (0, fivem_1.emit)('receiveVehicles', source, vehicles);
});
// Mostra a interface de usuário do React quando o jogador usa o comando 'garage'
(0, fivem_1.RegisterCommand)('garage', () => {
    console.log('Comando /garage chamado.');
    (0, fivem_1.SetNuiFocus)(true, true);
    (0, fivem_1.SendNuiMessage)(JSON.stringify({
        type: 'openGarage'
    }));
}, false);
// Listener para mensagens NUI
(0, fivem_1.RegisterNuiCallbackType)('closeUI');
(0, fivem_1.on)('__cfx_nui:closeUI', (data, cb) => {
    console.log('Mensagem NUI recebida: closeUI');
    (0, fivem_1.SetNuiFocus)(false, false);
    cb({});
});
*/