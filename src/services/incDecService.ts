import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api/axios";
import { SuccessResponse } from "../utils/response-model";
import { ErrorResponse } from "../utils/error-response-model";
import { AxiosError } from "axios";

export const getRandomNumber = createAsyncThunk('incDecSlice/getRandomNumber', async (_, thunkApi) => {
    try {
        const {data} = await api.get<any>(`/1`);
       
      return thunkApi.fulfillWithValue(data?.id)
    } catch (err) {
        const error = err as AxiosError;
      return thunkApi.rejectWithValue(error.response?.status)
    }
  })