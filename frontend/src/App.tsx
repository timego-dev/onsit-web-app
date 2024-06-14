import React, { useState } from 'react';
import ScanInput from './components/ScanInput';
import ScanCard from './components/ScanCard';

function App() {
  const [scanResults, setScanResults] = useState<any>(null); // State to store scan results

  const handleScanStart = (domain: string, tool: string) => {
    // Simulate calling Flask backend to initiate scan (replace with actual API call)
    fetch('/scan', {
      method: 'POST',
      body: JSON.stringify({ domain, tool }),
    })
      .then((response) => response.json())
      .then((data) => setScanResults(data));
  };

  return (
    <div className="App">
      <ScanInput onScanStart={handleScanStart} />
      {scanResults && <ScanCard scanResults={scanResults} />}
    </div>
  );
}

export default App;