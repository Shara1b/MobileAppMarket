import StarIconCircule from "@/components/Icons/StarIconCircule";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const EmptyDailyMatches = () => {
  const handleAIPick = () => {
    console.log("Обновите портфолио и навыки для лучших совпадений");
  };

  return (
    <View style={styles.container}>
      <View></View>
      <StarIconCircule
        width={80}
        height={80}
        color={COLORS.PRIMARY_BORDER_COLOR}
      />

      <StyledText
        variant="title"
        size="regular"
        style={{ marginBottom: 7, marginTop: 16, textAlign: "center" }}
      >
        Сегодня нет новых совпадений
      </StyledText>

      <StyledText
        variant="subtitle-grey"
        size="small"
        style={{
          textAlign: "center",
          marginBottom: 15,
          width: 245,
        }}
      >
        Мы уведомим вас, когда появятся проекты, подходящие под ваш профиль
      </StyledText>

      <StyledButton
        onPress={handleAIPick}
        variant="forms-transparent-btn"
        style={{ height: 72 }}
      >
        <StyledText
          variant="button-text-grey"
          size="small"
          style={{ textAlign: "center" }}
        >
          💡 Обновите портфолио и навыки для лучших совпадений
        </StyledText>
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 60,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 80,
    height: 80,
  },
});
export default EmptyDailyMatches;
