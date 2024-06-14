export interface ScanBodyRequest {
  domain: string;
  tool: string;
}

export interface IScanDomainResult {
  domain: string;
  ip: string;
  start_date: string;
  end_date: string;
  data: {
    subdomains: string[];
  };
  [key: string]: any;
}
