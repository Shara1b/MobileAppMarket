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
      <View style={styles.iconContainer}>
        <Ionicons name="search-outline" size={40} color="#9CA3AF" />
      </View>

      <StyledText
        variant="title"
        size="regular"
        style={{ marginBottom: 8, marginTop: 16 }}
      >
        Ничего не найдено
      </StyledText>

      <StyledText
        variant="subtitle-grey"
        size="small"
        style={{
          textAlign: "center",
          marginBottom: 24.4,
          width: 244,
        }}
      >
        Попробуйте изменить фильтры или ключевые слова для поиска
      </StyledText>

      <StyledButton
        onPress={handleAIPick}
        variant="outline-btn"
        style={{ width: 226 }}
        lable="Посмотреть AI подборку"
        variantText="button-text-blue"
      />
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
  },
});

export default EmptySearchResult;
