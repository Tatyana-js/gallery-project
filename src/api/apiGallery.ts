import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAuthor, ICard, ILocation } from "../types/index.ts";

export interface PaintingsQueryParams {
  id?: number;
  q?: string;
  _page?: number;
  authorId?: number;
  _limit?: number;
}

const basaUrl = "https://test-front.framework.team/";

export const apiGallery = createApi({
  reducerPath: "apiGallery",
  baseQuery: fetchBaseQuery({ baseUrl: basaUrl }),
  endpoints: (builder) => ({
    getPaintings: builder.query<ICard[], PaintingsQueryParams>({
      query: (params) => {
        const searchParams = new URLSearchParams();
        Object.entries(params || {}).forEach(([key, value]) => {
          if (value !== undefined) {
            searchParams.append(key, value.toString());
          }
        });
        return `paintings?${searchParams.toString()}`;
      },
      transformResponse: (res: ICard[]) =>
        res.map((card) => ({
          ...card,
          imageUrl: `${basaUrl}${card.imageUrl}`,
        })),
    }),
    getAuthors: builder.query<IAuthor[], void>({
      query: () => "authors",
    }),
    getLocations: builder.query<ILocation[], void>({
      query: () => "locations",
    }),
  }),
});

export const {
  useGetPaintingsQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = apiGallery;
