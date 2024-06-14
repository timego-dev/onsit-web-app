import React, { useState } from 'react';

interface ScanInputProps {
  onScanStart: (domain: string, tool: string) => void;
}

const ScanInput: React.FC<ScanInputProps> = ({ onScanStart }) => {
  const [domain, setDomain] = useState('');
  const [selectedTool, setSelectedTool] = useState('theHarvester'); // Default tool

  const handleScanClick = () => {
    if (domain) {
      onScanStart(domain, selectedTool);
    } else {
      alert('Please enter a domain name.');
    }
  };

  return (
    <div className="scan-input">
      <label htmlFor="domain">Domain:</label>
      <input
        type="text"
        id="domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="e.g., google.com"
      />
      <div className="tool-selection">
        <label>
          <input
            type="radio"
            id="theHarvester"
            name="tool"
            value="theHarvester"
            checked={selectedTool === 'theHarvester'}
            onChange={(e) => setSelectedTool(e.target.value)}
          />
          theHarvester
        </label>
        <label>
          <input
            type="radio"
            id="amass"
            name="tool"
            value="amass"
            checked={selectedTool === 'amass'}
            onChange={(e) => setSelectedTool(e.target.value)}
          />
          Amatsuka (Amass)
        </label>
      </div>
      <button onClick={handleScanClick}>Scan</button>
    </div>
  );
};

export default ScanInput;