import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Image, StyleSheet, View } from "react-native";

const EmptyDailyMatches = () => {
  const handleAIPick = () => {
    console.log("Обновите портфолио и навыки для лучших совпадений");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/ContainerStar.png")}
          style={styles.icon}
        />
      </View>

      <StyledText style={styles.title}>Сегодня нет новых совпадений</StyledText>

      <StyledText style={styles.subtitle}>
        Мы уведомим вас, когда появятся проекты, подходящие под ваш профиль
      </StyledText>

      <StyledButton onPress={handleAIPick} variant="up-portfolio-btn">
        <StyledText style={styles.buttonText}>
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
  title: {
    maxWidth: 193,
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.TITLE_GREY,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.SUBTITLE_GREY,
    textAlign: "center",
    marginBottom: 3.4,
    lineHeight: 21,
  },
  buttonText: {
    flex: 1,
    width: 244,
    fontSize: 13,
    fontWeight: "400",
    color: COLORS.PRIMARY_BUTTON_TEXT_DARK,
    textAlign: "center",
    lineHeight: 20,
  },
});
export default EmptyDailyMatches;
