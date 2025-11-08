import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ShowButton,
    Edit,
    Create,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    DateInput,
} from "react-admin";

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

export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" required />
        </SimpleForm>
    </Edit>
);

export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" required />
        </SimpleForm>
    </Create>
);

export const GenreShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);
