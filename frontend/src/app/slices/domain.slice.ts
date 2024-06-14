import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IScanDomainResult } from "../../@types";
import { scanDomain } from "../../api/domain";

const initialState: {
  scanResult?: IScanDomainResult;
  loading: boolean;
  showCard: boolean;
  scanHistory: IScanDomainResult[];
} = {
  loading: false,
  showCard: true,
  scanHistory: [],
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setShowCard: (state, action: PayloadAction<boolean>) => {
      state.showCard = action.payload;
    },
    setScanResult: (state, action: PayloadAction<IScanDomainResult>) => {
      state.scanResult = action.payload;
      state.showCard = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(scanDomain.fulfilled, (state, action) => {
      state.scanResult = action.payload;
      state.loading = false;
      state.showCard = true;
      state.scanHistory = [...state.scanHistory, action.payload];
    });
    builder.addCase(scanDomain.pending, (state, action) => {
      state.loading = true;
      state.showCard = true;
    });
  },
});

export const { setShowCard, setScanResult } = domainSlice.actions;
export default domainSlice.reducer;
