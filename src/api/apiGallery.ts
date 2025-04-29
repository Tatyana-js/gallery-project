import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICard {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

interface IAuthor {
  id: number;
  name: string;
}

interface ILocation {
  id: number;
  location: string;
}

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
