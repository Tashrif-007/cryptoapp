import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi'; 
import { getDefaultNormalizer } from '@testing-library/react';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoApi.middleware),
});