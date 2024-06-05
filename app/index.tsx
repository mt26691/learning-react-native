import { Text, View } from "react-native";
import ComponentScreen from "../components/ComponentScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ComponentScreen></ComponentScreen>
      <Text>Edit app/index.tsx to edit this screen 1</Text>
    </View>
  );
}
