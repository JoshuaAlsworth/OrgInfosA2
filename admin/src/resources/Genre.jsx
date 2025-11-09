import * as React from "react";
import { SimpleShowLayout, List, DataTable, DateField, Datagrid, TextField, EditButton, ShowButton, Edit, Show, Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const GenreList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
        </SimpleForm>
    </Create>
);

export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" required />
        </SimpleForm>
    </Edit>
);

export const GenreShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="birth_date" />
        </SimpleShowLayout>
    </Show>
);