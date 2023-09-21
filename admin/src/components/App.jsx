"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
// import { ListGadget, EditGadget } from './Gadget';
import { ListBrands, EditBrand } from './Brand';
import dataProvider from '../dataProvider';

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="brands" list={ListBrands} edit={EditBrand} />
    {/* <Resource name="gadgets" list={ListGadgets} edit={EditGadget} /> */}
    {/* <Resource name="services" list={ListServices} edit={EditService} /> */}
  </Admin>
);

export default AdminApp;