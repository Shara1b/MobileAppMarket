import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";
import SubstitleContent from "./SubstilteContent";

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText variant="logo" size="regular">
          Light
        </StyledText>
        <StyledButton
          variant="transparment"
          variantText="tag"
          sizeText="medium"
          lable="Выйти"
        />
      </View>
      <SubstitleContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },
});

export default ComingSoon;
