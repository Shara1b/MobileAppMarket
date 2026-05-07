import StyledButton from "@/components/StyledButton";
import StyledInputLable from "@/components/StyledInputLable";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StyledText variant="title" size="regular" style={{ marginBottom: 25 }}>
        Получите ранний доступ
      </StyledText>
      <StyledInputLable
        placeholder="Введите ваш email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        variant="forms-input"
        leftIcon={
          <Ionicons
            name="mail-outline"
            size={20}
            color="#9CA3AF"
            style={{ marginRight: 10 }}
          />
        }
      />
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
  footer: {
    alignItems: "center",
    gap: 12,
    marginBottom: 39,
  },
});

export default EarlyAccessForm;
