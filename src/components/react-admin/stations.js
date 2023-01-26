// in src/components/react-admin/stations.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput,
    NumberField
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
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
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="name" />
          <TextField source="direction" />
          <NumberField source="available_bikes"/>
        </Datagrid>
      )}
    </List>
  );
}