import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    SearchInput,
    ReferenceInput,
    SelectInput,
    Edit,
    Show,
    Create,
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    DateInput,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
} from "react-admin";
import { Typography } from "@mui/material";

const BookFilters = [
    <SearchInput source="q" alwaysOn key="q" />,
    <TextInput label="Title" source="title" key="title" />,
    <ReferenceInput source="author_id" reference="authors" key="author">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

const Aside = () => (
    <div style={{ width: 200, margin: "4em 1em" }}>
        <Typography variant="h6">Book details</Typography>
    </div>
);

export const BookList = () => (
    <List filters={BookFilters}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" label="Book Title" />
            <ReferenceField source="author_id" reference="authors" label="Author">
                <TextField source="name" />
            </ReferenceField>
            {/* books has no genre_id column, so we can't do ReferenceField here */}
            <TextField source="published_year" label="Year Published" />
        </Datagrid>
    </List>
);

export const BookCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="author_id" reference="authors" label="Author">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="published_year" />
        </SimpleForm>
    </Create>
);

export const BookEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="author_id" reference="authors" label="Author">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="published_year" />

            {/* read-only genres in edit */}
            <ReferenceManyField
                reference="book_genres"
                target="book_id"
                label="Genres"
            >
                <SingleFieldList>
                    <ReferenceField source="genre_id" reference="genres">
                        <ChipField source="name" />
                    </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export const BookShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="author_id" reference="authors" label="Author">
                <TextField source="name" />
            </ReferenceField>

            <ReferenceManyField
                reference="book_genres"
                target="book_id"
                label="Genres"
            >
                <SingleFieldList>
                    <ReferenceField source="genre_id" reference="genres">
                        <ChipField source="name" />
                    </ReferenceField>
                </SingleFieldList>
            </ReferenceManyField>

            <TextField source="published_year" label="Year Published" />
        </SimpleShowLayout>
    </Show>
);
