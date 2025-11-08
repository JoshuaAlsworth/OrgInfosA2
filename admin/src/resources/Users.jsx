import { List, DataTable } from 'react-admin';

export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="email" />
            <DataTable.Col source="display_name" />
            <DataTable.Col source="role" />
        </DataTable>
    </List>
);