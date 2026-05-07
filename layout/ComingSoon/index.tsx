import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { ScrollView, StyleSheet, View } from "react-native";
import EarlyAccessForm from "./EarlyAccessForm";
import EarlyAccessSection from "./EarlyAccessSection";
import SubstitleContent from "./SubstilteContent";

const ComingSoon = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
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
        <EarlyAccessSection targetDate={new Date("2026-06-16T00:00:00")} />
        <EarlyAccessForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
