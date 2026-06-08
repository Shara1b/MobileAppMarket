import { StyleSheet, View } from "react-native";
import EditProfile from "../Screens/Profile/EditProfile";

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <NavigatePanel/> */}
      <EditProfile />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // Важно! Занимает весь доступный экран
  },
});
export default Main;
