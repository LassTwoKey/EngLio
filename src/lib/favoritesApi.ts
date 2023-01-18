import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "./api";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    favorites: builder.query<any, void>({
      query: () => "/favorites.json"
    }),
    favoritesById: builder.query<any, string>({
      query: id => `/favorites/${id}.json`
    })
  })
});

export const { useFavoritesQuery, useFavoritesByIdQuery } = favoritesApi;
export default favoritesApi;
