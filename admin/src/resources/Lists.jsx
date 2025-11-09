import * as React from "react";
import { List, DateField, Datagrid, TextField, EditButton, ShowButton, ReferenceField } from 'react-admin';

export const ListView = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" label="User" />
            <TextField source="name" />
            <TextField source="is_default" />
        </Datagrid>
    </List>
);