import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login';
import { useState } from 'react';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

//TODO eliminar las dos lineas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';
import { StationList } from 'components/react-admin/stations';
import { BiciList, BiciCreate, BiciEdit } from 'components/react-admin/bicis';

import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';
import StationIcon from '@mui/icons-material/EvStation';
import BiciIcon from '@mui/icons-material/PedalBike';

import { AdminLayout } from 'components/react-admin/adminLayout';

//PARA PHP CRUD API
//
//const dataProvider = jsonServerProvider('http://encuentro.test/api/records');

//PARA LARAVEL CONTROLLERS
//
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
    basename="/dashboard"
    dataProvider={dataProvider}
    authProvider={AuthProvider}
    loginPage={myLogin}
  >
    <Resource name="customers" list={CustomerList} icon={CustomerIcon}
      edit={CustomerEdit} create={CustomerCreate} />
    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    <Resource name="stations" list={StationList} icon={StationIcon} />
    <Resource name="vehiculos" list={BiciList} icon={BiciIcon} create={BiciCreate}
      edit={BiciEdit} />
  </Admin>
)
}

export default RAdmin;