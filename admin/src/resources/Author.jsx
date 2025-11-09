import * as React from "react";
import { List, DataTable, DateField, Datagrid, TextField, EditButton, ShowButton, Edit, Show, Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const AuthorList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="birth_date" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
            <DateInput label="Birth Date" source="birth_date" />
        </SimpleForm>
    </Create>
);

export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" required />
            <DateInput source="birth_date" />
        </SimpleForm>
    </Edit>
);

export const AuthorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="birth_date" />
        </SimpleShowLayout>
    </Show>
);