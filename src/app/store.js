import {configureStore} from '@reduxjs/toolkit'

import { cryptoApi } from '../services/crypto'
import { cryptoNewsApi } from '../services/CryptoNewsApi'
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer
    }
})