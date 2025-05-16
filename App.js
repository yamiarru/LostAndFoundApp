import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./screens/HomeScreen";
import { MyPetsScreen } from "./screens/MyPetsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { TrackingScreen } from "./screens/TrackingScreen";
import { PetshopScreen } from "./screens/PetshopScreen";
import { SubscriptionScreen } from "./screens/SubscriptionScreen";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Mi perfil" component={ProfileScreen} />
      <Stack.Screen name="Mis mascotas" component={MyPetsScreen} />
      <Stack.Screen name="Seguimiento" component={TrackingScreen} />
      <Stack.Screen name="Petshop" component={PetshopScreen} />
      <Stack.Screen name="Suscripción" component={SubscriptionScreen} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Mi perfil" component={ProfileScreen} />
        <Drawer.Screen name="Mis mascotas" component={MyPetsScreen} />
        <Drawer.Screen name="Seguimiento" component={TrackingScreen} />
        <Drawer.Screen name="Petshop" component={PetshopScreen} />
        <Drawer.Screen name="Suscripción" component={SubscriptionScreen} />
      </Drawer.Navigator> */}
      <MyStack />
    </NavigationContainer>
  );
}
