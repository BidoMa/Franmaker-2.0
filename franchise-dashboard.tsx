import React, { useState } from 'react';

const Dashboard = () => {
  const [manualText, setManualText] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const handleManualSubmit = async () => {
    try {
      const response = await fetch('/api/generate-manual', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: manualText }),
      });
      const data = await response.json();
      setAiResponse(data.result);
    } catch (error) {
      console.error('Error:', error);
      setAiResponse('Error al generar el manual. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li 
              className={`cursor-pointer p-2 ${activeMenuItem === 'Dashboard' ? 'bg-blue-100' : ''}`}
              onClick={() => setActiveMenuItem('Dashboard')}
            >
              Dashboard
            </li>
            <li 
              className={`cursor-pointer p-2 ${activeMenuItem === 'Creador de manuales' ? 'bg-blue-100' : ''}`}
              onClick={() => setActiveMenuItem('Creador de manuales')}
            >
              Creador de manuales
            </li>
          </ul>
        </div>
      </div>
      <main className="flex-1 p-5">
        <h1 className="text-2xl font-bold mb-5">Dashboard de Franquicias</h1>
        {activeMenuItem === 'Creador de manuales' && (
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Creador de Manuales</h2>
            <textarea
              className="w-full p-2 border rounded mb-3"
              rows="4"
              value={manualText}
              onChange={(e) => setManualText(e.target.value)}
              placeholder="Escribe aquí para crear un manual..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleManualSubmit}
            >
              Generar Manual
            </button>
            {aiResponse && (
              <div className="mt-4 p-3 bg-gray-100 rounded">
                <h3 className="font-semibold">Respuesta de la IA:</h3>
                <p>{aiResponse}</p>
              </div>
            )}
          </div>
        )}
        {activeMenuItem === 'Dashboard' && (
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Resumen del Dashboard</h2>
            <p>Aquí puedes agregar más contenido para el dashboard principal.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
