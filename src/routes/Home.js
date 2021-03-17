import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default function Home(props) {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(loading, data);
  return <h1>Home</h1>;
}
