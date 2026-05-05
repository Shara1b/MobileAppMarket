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

      <StyledText variant="title" size="regular">
        Нет сохранённых проектов
      </StyledText>

      <StyledText
        variant="subtitle-grey"
        size="small"
        style={{
          textAlign: "center",
          marginBottom: 24.4,
          marginTop: 8,
          width: 243,
        }}
      >
        Добавляйте интересные проекты в избранное, чтобы вернуться к ним позже
      </StyledText>

      <StyledButton
        onPress={handleAIPick}
        variant="transparment-border"
        style={{ width: 165, borderRadius: 14, borderWidth: 1.6 }}
        lable="Искать проекты"
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
    backgroundColor: "#fff",
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
});

export default EmptyFavorites;
