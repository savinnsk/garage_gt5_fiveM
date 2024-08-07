import React, { useEffect, useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);

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


  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };

  return (
    <div className="nui-wrapper">
          <div id="garageUI" style={{ display: 'none' }}>
            <h1>Garagem</h1>
            <button onClick={closeUI}>Fechar</button>
            {/* Adicione aqui o resto da sua interface de usuário */}
        </div>
      <div className="popup-thing">
        <div>
          <h1>This is the NUI Popup!</h1>
          <p>Exit with the escape key</p>
          <button onClick={handleGetClientData}>Get Client Data</button>
          {clientData && <ReturnClientDataComp data={clientData} />}
        </div>
      </div>
    </div>
  );
};

export default App;
