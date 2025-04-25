import { createSlice } from '@reduxjs/toolkit'
import { generateMockData, updateMockData } from '../utils/mockSocket'

const initialState = {
  assets: generateMockData(),
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices(state) {
      state.assets = updateMockData(state.assets)
    },
  },
})

export const { updatePrices } = cryptoSlice.actions
export const selectAssets = (state) => state.crypto.assets
export default cryptoSlice.reducer
