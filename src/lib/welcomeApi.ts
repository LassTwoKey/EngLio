import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWelcome } from "../types/Welcome";
import { BASE_URL } from "./api";

export const welcomeApi = createApi({
  reducerPath: "welcomeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    welcome: builder.query<IWelcome, void>({
      query: () => "/welcome.json"
    })
  })
});

export const { useWelcomeQuery } = welcomeApi;
export default welcomeApi;
