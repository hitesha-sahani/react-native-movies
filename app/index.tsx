import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center">
      {/* Top bulb lights */}
      <View className="absolute top-16 flex-row">
        {[...Array(12)].map((_, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              marginHorizontal: 4,
              backgroundColor: "#FFD700", // gold color
              shadowColor: "#FFD700",
              shadowOpacity: 1,
              shadowRadius: 8,
              elevation: 8, // Android glow
            }}
          />
        ))}
      </View>

      {/* Glow behind GIF */}
      <View className="absolute w-72 h-72 bg-yellow-500 opacity-10 rounded-full" />

      {/* Main GIF */}
      <Image
        source={{
          uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9odWRvM3VjeXB4NHBpOTlrZG45ZGNpcGdtYzg5b3M5ZnRsdTRpZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7rc0qU6m5hneMsuc/giphy.gif",
        }}
        style={{ width: 250, height: 250 }}
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-white text-xl font-bold mt-4 tracking-widest">
        CINEMA TIME
      </Text>

      {/* Tagline */}
      <Text className="text-yellow-300 mt-3 text-base font-medium italic tracking-wide">
        Get your popcorn 🍿
      </Text>
    </View>
  );
}
