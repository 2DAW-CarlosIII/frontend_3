// in src/components/react-admin/stations.js
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
  NumberField,
  SelectInput,
  Edit,
  Create,
  SimpleForm,
  EditButton
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const stationFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const StationList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={stationFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.direction}
          tertiaryText={(record) => record.direction}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="nombre" />
          <TextField source="ciudad" />
          <TextField source="direccion" />
          <NumberField source="latitud" />
          <NumberField source="longitud" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

export const StationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="ciudad" />
      <TextInput source="direccion" />
      <TextInput source="latitud" />
      <TextInput source="longitud" />
    </SimpleForm>
  </Create>
);

const StationTitle = () => {
  const record = useRecordContext();
  return <span>Vehiculo {record ? `"${record.nombre} ${record.direccion}"` : ''}</span>;
};

export const StationEdit = () => (
  <Edit title={<StationTitle />}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="ciudad" />
      <TextInput source="direccion" />
      <TextInput source="latitud" />
      <TextInput source="longitud" />
    </SimpleForm>
  </Edit>
);