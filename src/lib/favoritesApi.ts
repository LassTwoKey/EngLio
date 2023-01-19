import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFavoriteCategory } from "../types/Favorite";
import { BASE_URL } from "./api";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  //tagTypes: ["Favorite"],
  endpoints: builder => ({
    favorites: builder.query<any, void>({
      query: () => "/favorites.json"
      //providesTags: ["Favorite"]
    }),
    favoritesById: builder.query<IFavoriteCategory, string>({
      query: id => `/favorites/${id}.json`,
      transformResponse: (response: any) => {
        return { name: response.name, list: response.list || null };
      }
    }),
    addFavorite: builder.mutation({
      query: reqParams => ({
        url: `/favorites/${reqParams.id}/list.json`,
        method: "POST",
        body: reqParams.body
      })
      //invalidatesTags: ["Favorites"]
    }),
    deleteFavorite: builder.mutation<{ success: boolean; id: number }, any>({
      query(reqParams) {
        return {
          url: `/favorites/${reqParams.category}/list/${reqParams.id}.json`,
          method: "DELETE"
        };
      }
      //invalidatesTags: ["Favorite"]
    })
  })
});

export const {
  useFavoritesQuery,
  useFavoritesByIdQuery,
  useDeleteFavoriteMutation,
  useAddFavoriteMutation
} = favoritesApi;
export default favoritesApi;
