import { View, Text } from "react-native";
import colors from "./assets/colors/colors";
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      <Icon name="ios-person" size={30} color="#4F8EF7" />
    </View>
  );
}
