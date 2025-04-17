import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Card {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

export const apiGallery = createApi({
  reducerPath: 'apiGallery',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/'}),
  endpoints: (builder) => ({
    getPaintings: builder.query<Card[], void>({
      query: () => 'paintings',
    })
  })
});

export const { useGetPaintingsQuery } = apiGallery;
