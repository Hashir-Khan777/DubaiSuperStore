import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import DrawerContent from "./DrawerContent";
import Categories from "../screens/Categories";
import SubCategories from "../screens/SubCategories";
import AllProducts from "../screens/AllProducts";
import RelatedCategories from "../screens/RelatedCategories";
import RelateadSubCategories from "../screens/RelateadSubCategories";
import AllBrands from "../screens/AllBrands";
import AllDepartment from "../screens/AllDepartment";

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
      <Drawer.Screen name="relatedcategories" component={RelatedCategories} />
      <Drawer.Screen
        name="relaedsubcategories"
        component={RelateadSubCategories}
      />
      <Drawer.Screen name="Brands" component={AllBrands} />
      <Drawer.Screen name="allDeparts" component={AllDepartment} />
    </Drawer.Navigator>
  );
}
