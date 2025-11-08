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

export const AuthorList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="birth_date" />
            <TextField source="created_at" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="birth_date" />
        </SimpleForm>
    </Edit>
);

export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
            <TextInput source="birth_date" />
        </SimpleForm>
    </Create>
);

export const AuthorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="birth_date" />
            <TextField source="created_at" />
        </SimpleShowLayout>
    </Show>
);
