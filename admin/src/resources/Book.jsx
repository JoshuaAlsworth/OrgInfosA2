import { Create, List, required, DataTable, DateField, SingleFieldList, ChipField, BooleanField, TextField, Datagrid, ShowButton, EditButton, Edit, SimpleForm, TextInput, ReferenceField, ReferenceManyField } from 'react-admin';

export const BookList = () => (
    <List exporter={false} pagination={false}>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="Book ID" />
            <TextField source="title" lavel="Book Title" />
            <ReferenceField source="author_id" reference="authors" label="Author Name" link={false}>
                <TextField source="name" />
            </ReferenceField>
            <ReferenceManyField reference="book_genres" target="book_id" label="Genre">
                <SingleFieldList>
                    <ReferenceField source="genre_id" reference="genres">
                        <ChipField source="name" />
                    </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>
            <TextField source="published_year" label="Publication Date" />
            <EditButton />
            {/* <ShowButton /> */}
        </Datagrid>
    </List>
);