import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import DrawerContent from "./DrawerContent";
import Categories from "../screens/Categories";
import SubCategories from "../screens/SubCategories";
import AllProducts from "../screens/AllProducts";

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="categories" component={Categories} />
      <Drawer.Screen name="subcategories" component={SubCategories} />
      <Drawer.Screen name="allproducts" component={AllProducts} />
    </Drawer.Navigator>
  );
}
