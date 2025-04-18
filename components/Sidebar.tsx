import { Box, Text } from "@/atoms";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
import { SafeAreaView } from "react-native";

export const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg={"$sidebarBackground"}>
      <SafeAreaView>
        <Text variant={"sidebar"} m={"lg"}>
          Gmail
        </Text>
      </SafeAreaView>
    </Box>
  );
};
