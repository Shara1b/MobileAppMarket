import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const ControllerContent = () => {
  const btnData = ["Попробовать снова", "Выбрать другую карту"];

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        {btnData.map((item, index) => (
          <StyledButton
            key={index}
            variant="outline-btn"
            style={{
              maxWidth: "100%",
              width: "100%",
              backgroundColor:
                index === 0 ? COLORS.PRIMARY_BUTTON_COLOR : "white",
            }}
          >
            <StyledText variant="button-text-grey">{item}</StyledText>
          </StyledButton>
        ))}
      </View>
      <View style={styles.footer}>
        <StyledText variant="subtitle-grey" size="small">
          🔍 Всё ещё проблема?
        </StyledText>
        <StyledButton variant="transparment">
          <StyledText variant="tag" size="small">
            Написать в поддержку
          </StyledText>
        </StyledButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    gap: 12,
    width: "100%",
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ControllerContent;
