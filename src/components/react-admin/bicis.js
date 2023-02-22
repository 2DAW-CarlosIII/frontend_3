// in src/components/react-admin/bicis.js
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
  NumberField,
  ImageField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const biciFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const BiciList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={biciFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.tipo}
          secondaryText={(record) => record.descripcion}
          tertiaryText={(record) => record.imagen}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <ReferenceField source="tipoVehiculo_id" reference="tipoVehiculos">
            <TextField source="tipo_vehiculo" />
          </ReferenceField>
          <TextField source="descripcion" />
          <ImageField source="imagen" title="descripcion" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

export const BiciCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="tipoVehiculo_id" reference="tipoVehiculos">
        <SelectInput optionText="tipo_vehiculo"/>
      </ReferenceInput>
      <TextInput source="descripcion" />
      <TextInput source="imagen" />
    </SimpleForm>
  </Create>
);

const BiciTitle = () => {
  const record = useRecordContext();
  return <span>Vehiculo {record ? `"${record.tipo} ${record.descripcion}"` : ''}</span>;
};

export const BiciEdit = () => (
  <Edit title={<BiciTitle />}>
    <SimpleForm>
    <ReferenceInput source="tipoVehiculo_id" reference="tipoVehiculos">
        <SelectInput optionText="tipo_vehiculo"/>
      </ReferenceInput>
      <TextInput source="tipo" />
      <TextInput source="descripcion" />
      <TextInput source="imagen" />
    </SimpleForm>
  </Edit>
);