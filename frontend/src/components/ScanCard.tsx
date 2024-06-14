import React from 'react';

interface ScanCardProps {
  scanResults: any;
}

const ScanCard: React.FC<ScanCardProps> = ({ scanResults }) => {
  if (!scanResults) return null;

  const { domain, start_time, end_time, data } = scanResults;
  const subdomains = data?.subdomains || []; // Handle potential missing data

  return (
    <div className="scan-card">
      <h2>Scan Details</h2>
      <p>Domain: {domain}</p>
      <p>Start Time: {start_time}</p>
      <p>End Time: {end_time}</p>
      <h3>Subdomains</h3>
      {subdomains.length > 0 ? (
        <ul>
          {subdomains.map((subdomain: string) => (
            <li key={subdomain}>{subdomain}</li>
          ))}
        </ul>
      ) : (
        <p>No subdomains found.</p>
      )}
      {/* Add sections for other data (emails, etc.) based on your logic  */}
    </div>
  );
};

export default ScanCard;