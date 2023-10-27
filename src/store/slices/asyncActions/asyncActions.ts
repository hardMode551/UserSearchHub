import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const {data} = await axios.get('http://[::1]:3000/');
    return data;
});