import { Tabs } from "expo-router";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
