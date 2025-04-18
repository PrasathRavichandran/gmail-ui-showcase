import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

export const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>Sidebar</Text>
    </View>
  );
};
