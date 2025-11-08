import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    DateInput,
} from "react-admin";

export const BookList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="published_year" />
            <TextField source="created_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const BookEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" required />
            <DateInput source="published_year" />
        </SimpleForm>
    </Edit>
);

export const BookCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" required />
            <TextInput source="published_year" />
        </SimpleForm>
    </Create>
);

export const BookShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="published_year" />
        </SimpleShowLayout>
    </Show>
);
