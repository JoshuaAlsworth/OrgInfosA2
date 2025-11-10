import { useState } from 'react'
import { createTrailbaseProvider } from './ra-trailbase';
import { Admin, bwLightTheme, bwDarkTheme, Resource } from 'react-admin';
import { UserList } from './resources/User';
import { AuthorList, AuthorEdit, AuthorCreate } from './resources/Author';
import { GenreList, GenreEdit, GenreCreate } from './resources/Genre';
import { BookList } from './resources/Book';



const TRAILBASE_URL = "https://obscure-computing-machine-5g47qg56pp69fv4x6-4000.app.github.dev";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={bwLightTheme}
      darkTheme={bwDarkTheme}>
      <Resource
        name="users"
        list={UserList} />
      <Resource
        name="authors"
        list={AuthorList}
        edit={AuthorEdit}
        create={AuthorCreate} />
      <Resource
        name="genres"
        list={GenreList}
        edit={GenreEdit}
        create={GenreCreate} />
      <Resource
        name="books"
        list={BookList} />
      <Resource
        name="book_genres" />
    </Admin>

  );
}