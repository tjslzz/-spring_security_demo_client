import HelloWorld from '../../../components/HelloWorld';
import {HELLO_PAGE_URL} from "../constants";

export default [
  {
    path: HELLO_PAGE_URL,
    name: HelloWorld.name,
    component: HelloWorld,
  },
];