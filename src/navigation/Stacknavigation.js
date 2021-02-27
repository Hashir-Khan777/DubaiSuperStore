import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";
import DrawerNavigation from "./DrawerNavigation";
import Categories from "../screens/Categories";
import SubCategories from "../screens/SubCategories";
import AllProducts from "../screens/AllProducts";
import AllProductComponent from "../components/AllProductComponent";
import ProductComponent from "../components/ProductComponent";

const Stack = createStackNavigator();
export default function Stacknavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="subcategories"
        component={SubCategories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="allproducts"
        component={AllProducts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="product"
        component={ProductComponent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
