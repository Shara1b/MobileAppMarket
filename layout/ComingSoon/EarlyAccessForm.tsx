import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StyledText variant="title" size="regular">
        Получите ранний доступ
      </StyledText>
      <View style={styles.input}>
        <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Введите ваш email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <StyledButton
        variant="forms-btn"
        style={{
          marginTop: 16,
          marginBottom: 15,
          backgroundColor: COLORS.PRIMARY_BUTTON_TEXT,
          width: "100%",
        }}
      >
        <StyledText style={{ color: "white", fontWeight: "600" }}>
          Уведомить о запуске
        </StyledText>
      </StyledButton>
      <View style={styles.footer}>
        <StyledText
          variant="subtitle-grey"
          size="small"
          style={{
            textAlign: "center",
          }}
        >
          Я согласен получать обновления о запуске Light
        </StyledText>
        <StyledText
          variant="subtitle-grey"
          size="small"
          style={{
            textAlign: "center",
            width: 304,
          }}
        >
          Никакого спама, только новости о запуске. Отписаться можно в любое
          время.
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.8,
    borderColor: "#E5E5EA",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    marginTop: 25,
  },
  footer: {
    alignItems: "center",
    gap: 12,
    marginBottom: 39,
  },
});

export default EarlyAccessForm;
