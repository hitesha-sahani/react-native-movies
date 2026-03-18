import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "watchlist";

// get movies
export const getSavedMovies = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("Fetch error", e);
    return [];
  }
};

// save movie
export const saveMovie = async (movie: any) => {
  try {
    const existing = await AsyncStorage.getItem(KEY);
    const movies = existing ? JSON.parse(existing) : [];

    const alreadyExists = movies.find((m: any) => m.id === movie.id);
    if (alreadyExists) return;

    const updated = [...movies, movie];
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));

    console.log("Saved:", movie.title);
  } catch (e) {
    console.log("Save error", e);
  }
};

// remove movie
export const removeMovie = async (id: number) => {
  try {
    const existing = await AsyncStorage.getItem(KEY);
    const movies = existing ? JSON.parse(existing) : [];

    const updated = movies.filter((m: any) => m.id !== id);

    await AsyncStorage.setItem(KEY, JSON.stringify(updated));

    console.log("Removed movie:", id);
  } catch (e) {
    console.log("Remove error", e);
  }
};
