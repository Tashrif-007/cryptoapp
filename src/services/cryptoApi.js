import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'X-RapidAPI-Key': '1a333dc38cmsh3c4b21d7dd8d519p12040fjsne6225f0454cb',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails : builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    })
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery
} = cryptoApi;