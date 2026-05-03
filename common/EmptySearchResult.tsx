import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import StyledButton from "../components/StyledButton";
import StyledText from "../components/StyledText";

const EmptySearchResult = () => {
  const handleAIPick = () => {
    console.log("AI подборка");
  };

  return (
    <View style={styles.container}>
      {/* Круг с иконкой */}
      <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={40} color="#9CA3AF" />
      </View>

      <StyledText style={styles.title}>Ничего не найдено</StyledText>

      <StyledText style={styles.subtitle}>
        Попробуйте изменить фильтры или ключевые слова для поиска
      </StyledText>

      <StyledButton onPress={handleAIPick} variant="outline-btn">
        <StyledText style={styles.buttonText}>
          Посмотреть AI подборку
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
    borderRadius: 40,
    backgroundColor: COLORS.TAG_BG,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.TITLE_GREY,
    textAlign: "center",
    marginBottom: 8,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.SUBTITLE_GREY,
    textAlign: "center",
    marginBottom: 24.4,
    lineHeight: 21,
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.PRIMARY_BUTTON_TEXT,
    textAlign: "center",
    lineHeight: 21,
  },
});

export default EmptySearchResult;
