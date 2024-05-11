import { createSlice } from '@reduxjs/toolkit'

export interface GetDeviceInfoResponse {
  browser: string | null
  name: string | null
  family: string | null
  model: string | null
  useragent: string | null
  fingerprint: string | null
}

export interface DeviceInfoSlice {
  data: GetDeviceInfoResponse | null
  isLoading: boolean
  error: boolean | null
  message: any | null
}

const initialState: DeviceInfoSlice = {
  data: null,
  isLoading: false,
  error: null,
  message: null
}

const deviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = null
      state.isLoading = false
      state.error = null
      state.message = null
    }
  },
  extraReducers: (builder) => {}
})

export const { reset } = deviceInfoSlice.actions
export default deviceInfoSlice.reducer
