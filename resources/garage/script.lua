-- client.lua
RegisterCommand('garage', function()
    print('Comando /garage chamado.')
    SetNuiFocus(true, true)
    SendNuiMessage(json.encode({
        type = 'openGarage'
    }))
end, false)

-- Listener para mensagens NUI
RegisterNUICallback('closeUI', function(data, cb)
    print('Mensagem NUI recebida: closeUI')
    SetNuiFocus(false, false)
    cb({})
end)


local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    SendNuiMessage(json.encode({
        type = 'openGarage'
    }))
        --SendReactMessage('setVisible', shouldShow)
  end
  
  RegisterCommand('show-nui', function()
    SendNuiMessage(json.encode({
        type = 'openGarage'
    }))
    toggleNuiFrame(true)
    print('Show NUI frame')
  end)
  
  RegisterNUICallback('hideFrame', function(_, cb)
    toggleNuiFrame(false)
    print('Hide NUI frame')
    cb({})
  end)
  
  RegisterNUICallback('getClientData', function(data, cb)
    print('Data sent by React', json.encode(data))
  
    -- Enviar de volta as coordenadas do cliente para o frame React
    local curCoords = GetEntityCoords(PlayerPedId())
  
    local retData = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
    cb(retData)
  end)