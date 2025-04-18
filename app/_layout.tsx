import { Sidebar } from "@/components/Sidebar";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
