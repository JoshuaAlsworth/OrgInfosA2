import * as React from 'react';
import { Show, List, SimpleShowLayout, TextField, ReferenceField, DataTable, Datagrid } from 'react-admin';


export const BookGenreList = () => (
    <List>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <ReferenceField source="book_id" reference="books" label="Book" />
            <ReferenceField source="genre_id" reference="genres" label="Genre" />
        </Datagrid>
    </List>
);