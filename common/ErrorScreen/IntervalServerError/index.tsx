import StyledButton from "@/components/StyledButton";
import { StyleSheet, View } from "react-native";
import ControllerContent from "./ControllerContent";
import MainContent from "./MainContent";

const IntervalServerError = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledButton
          icon="arrow-back-outline"
          sizeIcon={24}
          variant="transparment"
          style={{ width: 44, height: 44 }}
        />
        <StyledButton
          icon="close-outline"
          sizeIcon={24}
          variant="transparment"
          style={{ width: 44, height: 44 }}
        />
      </View>
      <MainContent />
      <ControllerContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingLeft: 12,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 85,
    paddingVertical: 26,
  },
});

export default IntervalServerError;
