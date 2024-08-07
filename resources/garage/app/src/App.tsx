import React, { useEffect } from 'react';
import './App.css'; // Seu arquivo de estilo

function App() {
    useEffect(() => {
        // Função para ouvir mensagens NUI
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === 'openGarage') {
                console.log('Mensagem NUI recebida: openGarage');
                const garageUI = document.getElementById('garageUI');
                if (garageUI) {
                    garageUI.style.display = 'block';
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const closeUI = () => {
        const garageUI = document.getElementById('garageUI');
        if (garageUI) {
            garageUI.style.display = 'none';
        }
        fetch(`https://${(window as any).GetParentResourceName()}/closeUI`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        }).then(() => console.log('UI Fechada'));
    };

    return (
        <div id="garageUI" style={{ display: 'none' }}>
            <h1>Garagem</h1>
            <button onClick={closeUI}>Fechar</button>
            {/* Adicione aqui o resto da sua interface de usuário */}
        </div>
    );
}

export default App;
