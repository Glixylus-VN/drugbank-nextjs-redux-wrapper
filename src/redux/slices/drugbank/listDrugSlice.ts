import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type detailInterface = {
  id: string;
};
export const getListDrug = createAsyncThunk("getListDrug", async () => {
  const res = await axios.get(
    "https://drugbank.vn/services/drugbank/api/public/thuoc",
    {
      params: {
        size: 100,
      },
    }
  );
  return res.data;
});

export const getDetailDrug = createAsyncThunk(
  "getDetailDrug",
  async (pid: string) => {
    const res = await axios.get(
      `https://drugbank.vn/services/drugbank/api/public/thuoc/${pid}`
    );
    return res.data;
  }
);

const initialState = {
  data: null,
  detailDrug: null,
};

const listDrugSlice = createSlice({
  name: "drugData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDrug.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addCase(getDetailDrug.fulfilled, (state, { payload }) => {
      state.detailDrug = payload;
    });
  },
});

export const {} = listDrugSlice.actions;

export default listDrugSlice.reducer;
