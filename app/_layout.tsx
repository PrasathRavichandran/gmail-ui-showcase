import { Sidebar } from "@/components/Sidebar";
import theme from "@/themes/light";
import { ThemeProvider } from "@shopify/restyle";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Drawer drawerContent={(props) => <Sidebar {...props} />}>
          <Drawer.Screen name="index" />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
