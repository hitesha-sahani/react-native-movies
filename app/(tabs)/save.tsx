import { View, Text, FlatList } from "react-native";
import { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";

import { getSavedMovies } from "@/services/storage";
import MovieCard from "@/components/MovieCard";

const Save = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const loadMovies = async () => {
    try {
      const data = await getSavedMovies();
      setMovies(data);
    } catch (error) {
      console.log("Error loading saved movies:", error);
    }
  };

  // 🔥 refresh when tab is focused
  useFocusEffect(
    useCallback(() => {
      loadMovies();
    }, []),
  );

  return (
    <SafeAreaView className="bg-primary flex-1 px-5">
      <Text className="text-white text-xl font-bold mt-5 mb-5">
        Saved Movies
      </Text>

      {movies.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-400 text-base">
            No saved movies yet 🍿
          </Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard {...item} isSavedScreen />}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Save;
