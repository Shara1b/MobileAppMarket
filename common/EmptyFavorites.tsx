import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const EmptyFavorites = () => {
  const handleAIPick = () => {
    console.log("Искать проекты");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="bookmark-outline" size={40} color="#9CA3AF" />
      </View>

      <StyledText style={styles.title}>Нет сохранённых проектов</StyledText>

      <StyledText style={styles.subtitle}>
        Добавляйте интересные проекты в избранное, чтобы вернуться к ним позже
      </StyledText>

      <StyledButton
        onPress={handleAIPick}
        variant="transparment-border"
        style={{ width: 165, borderRadius: 14, borderWidth: 1.6 }}
      >
        <StyledText style={styles.buttonText}>Искать проекты</StyledText>
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
    borderRadius: 40,
    backgroundColor: COLORS.TAG_BG,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    width: 277,
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.TITLE_GREY,
    lineHeight: 30,
    fontFamily: "Inter",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    maxWidth: 280,
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.SUBTITLE_GREY,
    textAlign: "center",
    marginBottom: 24.4,
    lineHeight: 21,
  },
  buttonText: {
    flex: 1,
    width: 114,
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.PRIMARY_BUTTON_TEXT,
    textAlign: "center",
    fontFamily: "Inter",
    lineHeight: 21,
  },
});

export default EmptyFavorites;
