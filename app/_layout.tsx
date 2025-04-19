import { Sidebar } from "@/components/Sidebar";
import theme from "@/themes/light";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ThemeProvider } from "@shopify/restyle";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type DrawerParamList = {
  index: undefined;
};

export type DrawerProps = DrawerNavigationProp<DrawerParamList, "index">;

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Drawer
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="index" />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
