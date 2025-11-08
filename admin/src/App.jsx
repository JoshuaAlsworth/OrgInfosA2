import { useState } from 'react';
import './App.css';
import { createTrailbaseProvider } from "./ra-trailbase.js";
import {
  bwLightTheme,
  bwDarkTheme,
  Admin,
  Resource
} from 'react-admin';
import { UserList } from './resources/Users';

export const TRAILBASE_URL = "https://obscure-computing-machine-5g47qg56pp69fv4x6-4000.app.github.dev";
export const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

export default function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      theme={bwLightTheme}
      darkTheme={bwDarkTheme}
    >
      <Resource
        name="users"
        list={UserList}
      />
    </Admin>
  );
}
