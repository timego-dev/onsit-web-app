import { createAsyncThunk } from "@reduxjs/toolkit";
import sleep from "sleep-promise";
import { ScanBodyRequest } from "../@types";
// import agent from "../config/agent";

const ResultExample = {
  domain: "google.com",
  data: {
    subdomains: ["google.com", "google.com"],
  },
  ip: "11.11.11.11",
  start_date: "2024-11-20",
  end_date: "2025-11-20",
};

export const scanDomain = createAsyncThunk(
  "domain/scanDomain",
  async (body: ScanBodyRequest) => {
    await sleep(3000);
    return ResultExample;
    // const response = await agent.post(`/scan`, body);
    // return {
    //   domain: body.domain,
    //   scanResult: response.data,
    // };
  }
);
