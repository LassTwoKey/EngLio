import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../types/Categories";
import { BASE_URL } from "./api";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    categories: builder.query<ICategory[], void>({
      query: () => "/categories.json"
    })
  })
});

export const { useCategoriesQuery } = categoriesApi;
export default categoriesApi;
