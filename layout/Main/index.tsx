import { StyleSheet, View } from "react-native";
import ComingSoon from "../ComingSoon";

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <NavigatePanel/> */}
      <ComingSoon />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // Важно! Занимает весь доступный экран
  },
});
export default Main;
