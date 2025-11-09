import * as React from "react";
import { List, DataTable, DateField, BooleanField, Datagrid, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" readOnly />
            <TextField source="email" readOnly />
            <TextField source="display_name" readOnly />
            <TextField source="role" readOnly />
        </Datagrid>
    </List>
);