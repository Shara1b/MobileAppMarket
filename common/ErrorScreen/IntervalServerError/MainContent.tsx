import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const MainContent = () => {
  return (
    <View style={styles.container}>
      <StyledText size="large">😕</StyledText>
      <View style={styles.box}>
        <StyledText variant="title" size="medium-large">
          Что-то пошло не так
        </StyledText>
        <View style={styles.substilte}>
          <StyledText
            variant="subtitle-grey"
            size="medium"
            style={{ textAlign: "center" }}
          >
            Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз или
            обратитесь в поддержку.
          </StyledText>
        </View>
        <StyledText variant="subtitle-grey" size="medium">
          ERR_500 • 5 апреля, 14:23
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 48,
  },
  substilte: {
    borderWidth: 0.8,
    borderRadius: 16,
    borderColor: COLORS.PRIMARY_BORDER_GREY,
    backgroundColor: COLORS.CARD_BG,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  box: {
    gap: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainContent;
