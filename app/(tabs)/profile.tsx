import { View, Text, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

import { getSavedMovies } from "@/services/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [savedCount, setSavedCount] = useState(0);

  const loadData = async () => {
    const movies = await getSavedMovies();
    setSavedCount(movies.length);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const clearAll = async () => {
    await AsyncStorage.removeItem("watchlist");
    setSavedCount(0);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary px-5">
      {/* 👤 User */}
      <View className="items-center mt-10">
        <Text className="text-white text-xl font-bold">Guest User</Text>
        <Text className="text-gray-400 mt-1">No account connected</Text>
      </View>

      {/* 📊 Stats */}
      <View className="mt-10 bg-black/40 p-5 rounded-xl">
        <Text className="text-white text-lg font-semibold mb-2">
          Your Stats
        </Text>

        <Text className="text-gray-300">Saved Movies: {savedCount}</Text>
      </View>

      {/* ⚙️ Actions */}
      <View className="mt-10">
        <TouchableOpacity
          onPress={clearAll}
          className="bg-red-600 p-4 rounded-xl"
        >
          <Text className="text-white text-center font-semibold">
            Clear Saved Movies
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
