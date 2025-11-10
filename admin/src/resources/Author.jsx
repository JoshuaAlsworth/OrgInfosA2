import { Create, List, required, DataTable, DateField, BooleanField, TextField, Datagrid, ShowButton, EditButton, Edit, SimpleForm, TextInput } from 'react-admin';

export const AuthorList = () => (
    <List exporter={false} pagination={false}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="Author ID" />
            <TextField source="name" lavel="Author Name" />
            <TextField source="birth_date" label="Born" />
            <EditButton />
            {/* <ShowButton /> */}
        </Datagrid>
    </List>
);

export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="Author Name" validate={required()} />
            <TextInput source="birth_date" label="Birth Date" />
        </SimpleForm>
    </Edit>
);

export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Author Name" validate={[required()]} />
            <TextInput source="birth_date" label="Birth Date" />
        </SimpleForm>
    </Create>
);