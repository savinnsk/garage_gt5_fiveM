


RegisterCommand('spawncar', (source, args) => {
    const vehicleName = args[0];
    if (vehicleName) {
        const playerPed = GetPlayerPed(-1);
        const vehicleHash = GetHashKey(vehicleName);
    //    RequestModel(vehicleHash);
        const checkModelLoaded = setInterval(() => {
            if (HasModelLoaded(vehicleHash)) {
                clearInterval(checkModelLoaded);
                const coords = GetEntityCoords(playerPed, false);
                const heading = GetEntityHeading(playerPed);
                const vehicle = CreateVehicle(vehicleHash, coords[0], coords[1], coords[2], heading, true, false);
                TaskWarpPedIntoVehicle(playerPed, vehicle, -1);
                SetVehicleNumberPlateText(vehicle, "ADMIN");
            }
        }, 500);
    } else {
        emit('chat:addMessage', {
            color: [255, 0, 0],
            multiline: true,
            args: ['[ERRO]', 'Você precisa especificar o nome do veículo.']
        });
    }
}, false);


RegisterCommand('getVehicles', (source) => {
        console.log('Evento getVehicles recebido do cliente:', source);
        const vehicles = [
            { id: 1, model: 'adder', plate: 'ABC123' },
            { id: 2, model: 'zentorno', plate: 'XYZ789' }
        ];
        emit('receiveVehicles', source, vehicles);
    });

