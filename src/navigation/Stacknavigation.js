import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";
import DrawerNavigation from "./DrawerNavigation";
import Categories from "../screens/Categories";
import SubCategories from "../screens/SubCategories";
import AllProducts from "../screens/AllProducts";
import ProductComponent from "../components/ProductComponent";
import RelatedCategories from "../screens/RelatedCategories";
import RelateadSubCategories from "../screens/RelateadSubCategories";
import Relatedproducts from "../screens/Relatedproducts";
import Checkout from "../screens/Checkout";
import PlaceOrder from "../screens/PlaceOrder";
import SignUp from "../screens/SignUp";

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
      <Stack.Screen
        name="relatedcategories"
        component={RelatedCategories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="relaedsubcategories"
        component={RelateadSubCategories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="relatedproducts"
        component={Relatedproducts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="placeOrder"
        component={PlaceOrder}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
