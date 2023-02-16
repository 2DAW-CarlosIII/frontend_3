// in src/components/react-admin/bicis.js
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  TextInput,
  EditButton,
  Edit,
  Create,
  SimpleForm
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const tipoVehiculoFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const TipoVehiculoList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={tipoVehiculoFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.tipo_vehiculo}
          secondaryText={(record) => record.precio}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="tipo_vehiculo" />
          <TextField source="precio" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

export const TipoVehiculoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="tipo_vehiculo" />
      <TextInput source="precio" />
    </SimpleForm>
  </Create>
);

const TipoVehiculoTitle = () => {
  const record = useRecordContext();
  return <span>Vehiculo {record ? `"${record.tipo_vehiculo} ${record.precio}"` : ''}</span>;
};

export const TipoVehiculoEdit = () => (
  <Edit title={<TipoVehiculoTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="tipo_vehiculo" />
      <TextInput source="precio" />
    </SimpleForm>
  </Edit>
);