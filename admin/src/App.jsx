import { Admin, Resource, defaultTheme, bwLightTheme, bwDarkTheme } from 'react-admin';
import { createTrailbaseProvider } from './ra-trailbase';
import { UserList } from './resources/User';
import { AuthorCreate, AuthorEdit, AuthorList, AuthorShow } from './resources/Author';
import { GenreCreate, GenreEdit, GenreList, GenreShow } from './resources/Genre';
import { BookList, BookEdit, BookCreate } from './resources/Book';
import { BookGenreList } from './resources/BookGenres';
import { ListView } from './resources/Lists';
import { MyLayout } from './MyLayout';

const TRAILBASE_URL = "https://obscure-computing-machine-5g47qg56pp69fv4x6-4000.app.github.dev";
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);


export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      theme={bwLightTheme}
      darkTheme={bwDarkTheme}
      layout={MyLayout}>
      <Resource
        name="users"
        list={UserList}
      />
      <Resource
        name="authors"
        list={AuthorList}
        create={AuthorCreate}
        edit={AuthorEdit}
        show={AuthorShow}
      />
      <Resource
        name="genres"
        list={GenreList}
        create={GenreCreate}
        edit={GenreEdit}
        show={GenreShow}
      />
      <Resource
        name="books"
        list={BookList}
        edit={BookEdit}
        create={BookCreate}
      />
      <Resource
        name="book_genres"
        list={BookGenreList}
      />
      <Resource
        name="lists"
        list={ListView}
      />
    </Admin>
  );
}
