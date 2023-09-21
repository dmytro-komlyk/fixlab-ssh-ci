import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import {
  List,
  SimpleList,
  ArrayInput,
  Datagrid,
  TextField,
  Edit,
  Create,
  DateInput,
  TabbedForm,
  TextInput,
  useRecordContext,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  DateField,
  required,
} from 'react-admin';

const TitleBrand = () => {
  const record = useRecordContext();
  return <span>Cтатья {record ? `"${record.title}"` : ''}</span>;
};

const ListBrands = (props) => {

  return (
    <List {...props} title='Brands'>
      {/* {isSmall ? (
        <SimpleList rowClick="edit"
          primaryText={(record) => record.title}
          secondaryText={(record) => (
            <TextField source="teaser" />
          )}
        />
      ) : ( */}
        <Datagrid rowClick="edit">
          <TextField source="slug" label="Slug"/>
          <TextField source="title" label="Title" />
          {/* <TextField source="description" label="Description" />
          <ImageField source="image" title="Image" label="Image" /> */}
        </Datagrid>
      {/* )} */}
    </List>
  );
}

const EditBrand = () => {
  const transform = data => ({
    ...data,
    // idPage: `${getSlugifyUrl(data.title)}`
  });

  return (
    <Edit title={<TitleBrand />} transform={transform}>
      <TabbedForm>
        <TabbedForm.Tab label="Seo">
          <TextInput label="Meta title" source="metaData.title"/>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Content">
          <TextInput disabled source="id" />
          <TextInput source="slug" label="Slug" fullWidth/>
          <TextInput source="title" label="Title" validate={required()} fullWidth />
          <TextInput source="description" label="Description" validate={required()} fullWidth />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  )
}

const CreateBrand = (props) => {

  return (
    <Create {...props} transform={transform}>
      <TabbedForm>
        <TabbedForm.Tab label="SEO">
          <TextInput label="Seo title" source="seo.title"/>
          <TextInput label="Seo description" source="seo.description"/>
          <ArrayInput label="Seo keywords" source="seo.keywords">
            <SimpleFormIterator inline>
              <TextInput label="Keyword" source="keyword" helperText={false} />
            </SimpleFormIterator>
          </ArrayInput>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="Content">
          <TextInput source="title" label="Title" validate={required()} fullWidth />
          <TextInput source="description" label="Description" validate={required()} fullWidth />

          <ImageInput
            source="gallery"
            label="Gallery"
            accept="image/png, image/jpg, image/jpeg"
            maxSize={5000000}
            placeholder= "*File size should not exceed 5MB"
          >
            <ImageField source="src" />
          </ImageInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  )
}

export {
  ListBrands,
  EditBrand,
  CreateBrand
}
