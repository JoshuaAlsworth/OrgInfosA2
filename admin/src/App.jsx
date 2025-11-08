import { useState } from 'react'
import { Admin, Resource, memoryStore } from "react-admin";
import { createTrailbaseProvider } from './ra-trailbase';

/* CRUD SCREENS */
import {
  AuthorList,
  AuthorEdit,
  AuthorCreate,
  AuthorShow,
} from "./resources/authors.jsx"

import {
  GenreList,
  GenreEdit,
  GenreCreate,
  GenreShow,
} from "./resources/genres.jsx"

import {
  BookList,
  BookEdit,
  BookCreate,
  BookShow,
} from "./resources/books.jsx"

const TRAILBASE_URL = "https://obscure-computing-machine-5g47qg56pp69fv4x6-4000.app.github.dev";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

export default function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="authors"
        list={AuthorList}
        edit={AuthorEdit}
        create={AuthorCreate}
        show={AuthorShow}
      />
      <Resource
        name="genres"
        list={GenreList}
        edit={GenreEdit}
        create={GenreCreate}
        show={GenreShow}
      />
      <Resource
        name="books"
        list={BookList}
        edit={BookEdit}
        create={BookCreate}
        show={BookShow}
      />
    </Admin>
  );
}


