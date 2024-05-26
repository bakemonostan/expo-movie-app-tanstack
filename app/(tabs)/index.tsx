import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "@/components/Themed";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/api/movies";

export default function TabOneScreen() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
