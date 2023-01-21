import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../types/Card";
import { BASE_URL } from "./api";

type FlashCards = {
  [key: string]: any;
};

export const flashCardApi = createApi({
  reducerPath: "flashCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["FlashCard"],
  endpoints: builder => ({
    flashcards: builder.query<ICard[], string>({
      query: id => `/${id}.json`,
      transformResponse: (response: FlashCards) => {
        const flashcardsData: ICard[] = [];

        for (const key in response) {
          const obj = {
            ...response[`${key}`],
            id: response[key].id,
            uniqueId: key
          };

          flashcardsData.push(obj);
        }

        return flashcardsData;
      },
      providesTags: ["FlashCard"]
    }),
    addFlashcard: builder.mutation<ICard[], { id: string; body: any }>({
      query: reqParams => ({
        url: `/${reqParams.id}.json`,
        method: "POST",
        body: reqParams.body
      }),
      invalidatesTags: ["FlashCard"]
    }),
    delFlashcard: builder.mutation({
      query(reqParams) {
        return {
          url: `/${reqParams.category}/${reqParams.id}/.json`,
          method: "DELETE"
        };
      },
      invalidatesTags: ["FlashCard"]
    })
  })
});

export const {
  useFlashcardsQuery,
  useDelFlashcardMutation,
  useAddFlashcardMutation
} = flashCardApi;
export default flashCardApi;
