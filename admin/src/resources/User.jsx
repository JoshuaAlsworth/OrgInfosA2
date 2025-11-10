import { List, DataTable, DateField, BooleanField, TextField, Datagrid } from 'react-admin';

export const UserList = () => (
    <List actions={false} exporter={false}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="User ID" />
            <TextField source="email" lavel="Email" />
            <TextField source="display_name" label="Display Name" />
            <TextField source="role" label="User Role" />
        </Datagrid>
    </List>
);