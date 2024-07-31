import React, { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const data = event.data;
            if (data.type === 'openGarage') {
                // Exibir a interface da garagem
                console.log('Open garage UI');
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const closeUI = () => {
        fetch('https://my-garage-app/closeUI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Garage</h1>
                <button onClick={closeUI}>Close</button>
            </header>
        </div>
    );
};

export default App;