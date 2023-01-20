import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { objToArr } from "../utils/objToArr";
import { ISection } from "../types/Section";
import { BASE_URL } from "./api";

export const sectionApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["Section"],
  endpoints: builder => ({
    sectionData: builder.query<ISection, string>({
      query: id => `/sections/${id}.json`,
      transformResponse: (response: ISection) => {
        return {
          ...response,
          words: response.words ? objToArr(response.words) : null,
          phrasal_verbs: response.phrasal_verbs
            ? objToArr(response.phrasal_verbs)
            : null,
          phrases: response.phrases ? objToArr(response.phrases) : null,
          expressions: response.expressions
            ? objToArr(response.expressions)
            : null
        };
      },
      providesTags: ["Section"]
    })
  })
});

export const { useSectionDataQuery } = sectionApi;
export default sectionApi;
