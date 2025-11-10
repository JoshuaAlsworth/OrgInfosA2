import { Create, List, required, DataTable, DateField, BooleanField, TextField, Datagrid, ShowButton, EditButton, Edit, SimpleForm, TextInput } from 'react-admin';

export const GenreList = () => (
    <List exporter={false} pagination={false}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="Genre ID" />
            <TextField source="name" lavel="Genre name" />
            <EditButton />
            {/* <ShowButton /> */}
        </Datagrid>
    </List>
);

export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="Genre Name" validate={required()} />
        </SimpleForm>
    </Edit>
);

export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Genre Name" validate={[required()]} />
        </SimpleForm>
    </Create>
);