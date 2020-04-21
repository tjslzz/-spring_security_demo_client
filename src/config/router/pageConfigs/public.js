import Login from '../../../components/Login';
import HelloWorld from '../../../components/HelloWorld';
import {HELLO_PAGE_URL} from "../constants";


const AUTH_SERVER_URI = 'http://auth.server.com:8001/';

export default [
  {
    path: "/",
    name: Login.name,
    component: Login,
    meta: {
      titleKey: "login",
      isPublic: true,
    },
  },
  {
    path: HELLO_PAGE_URL,
    name: HelloWorld.name,
    component: HelloWorld,
    meta: {
      titleKey: "hello",
      permissionKey: 'ADMIN_READ',
    },
  },
  {
    path: "/login",
    redirect: AUTH_SERVER_URI,
  },
];