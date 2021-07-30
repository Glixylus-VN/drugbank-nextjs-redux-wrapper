import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
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
  loading: false,
  data: null,
  detailDrug: null,
  hydrateDataDrug: {},
};

const listDrugSlice = createSlice({
  name: "drugData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDrug.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListDrug.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(getDetailDrug.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailDrug.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.detailDrug = payload;
    });
    builder.addCase(HYDRATE, (state, action: any) => {
      console.log("HYDRATE", state, action.payload.drugData);
      state.hydrateDataDrug = action.payload.drugData;
    });
  },
});

export const {} = listDrugSlice.actions;

export default listDrugSlice.reducer;
