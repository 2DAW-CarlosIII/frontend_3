import { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import jsonapiClient from 'ra-jsonapi-client';
import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

import { StationList } from 'components/react-admin/stations';
import { BiciList, BiciCreate, BiciEdit } from 'components/react-admin/bicis';
import { TipoVehiculoList, TipoVehiculoCreate, TipoVehiculoEdit } from 'components/react-admin/tipovehiculo';

import UserIcon from '@mui/icons-material/Group';
import CustomerIcon from '@mui/icons-material/SupportAgent';
import StationIcon from '@mui/icons-material/EvStation';
import BiciIcon from '@mui/icons-material/PedalBike';
import TipoVehiculoIcon from '@mui/icons-material/ElectricBikeOutlined'

import { AdminLayout } from 'components/react-admin/adminLayout';

import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login'

const dataProvider = jsonapiClient('http://encuentro.test/api');

const RAdmin = () => {

  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }

  const myLogin = <Login handleDataProvider={handleDataProvider} />
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
  }

  return (
    <Admin
      authProvider={AuthProvider}
      basename="/dashboard"
      dataProvider={dataProvider}
      loginPage={myLogin}
    >
      <Resource name="customers" list={CustomerList} icon={CustomerIcon}
        edit={CustomerEdit} create={CustomerCreate} />
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
      <Resource name="stations" list={StationList} icon={StationIcon} />
      <Resource name="tipoVehiculos" list={TipoVehiculoList} icon={TipoVehiculoIcon}
      create={TipoVehiculoCreate} edit={TipoVehiculoEdit}/>
      <Resource name="vehiculos" list={BiciList} icon={BiciIcon} create={BiciCreate}
        edit={BiciEdit} />
    </Admin>
  )
}
export default RAdmin;