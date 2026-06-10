import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface AboutSectionProps {
  about: string;
  setAbout: (text: string) => void;
}

const AboutSection = ({ about, setAbout }: AboutSectionProps) => {
  const [loading, setLoading] = useState(false);

  // Функция для улучшения текста с помощью AI (заглушка)
  const improveWithAI = async () => {
    if (!about.trim()) {
      // Если текст пустой, предлагаем пример
      setAbout(
        "Опытный специалист в области UX/UI дизайна с 3+ годами работы. Создаю интуитивно понятные и эстетичные интерфейсы, которые решают задачи пользователей и бизнеса. Владею Figma, Sketch, Adobe XD. Умею проводить исследования, создавать прототипы и тестировать гипотезы.",
      );
      return;
    }

    setLoading(true);

    // Имитация запроса к AI (потом замените на реальный API)
    setTimeout(() => {
      const improved = `${about}\n\n✨ Улучшенная версия: ${about.substring(0, 50)}... Готов к новым вызовам и интересным проектам!`;
      setAbout(improved);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText variant="button-text-grey" size="secondary">
          Профессиональное резюме
        </StyledText>
        <StyledText variant="subtitle" size="small">
          О себе
        </StyledText>
      </View>

      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          value={about}
          onChangeText={setAbout}
          placeholder="Расскажите о своем опыте и навыках..."
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
        />
      </View>

      <StyledButton
        lable={loading ? "Улучшение..." : "Улучшить с помощью AI"}
        sizeText="small"
        variantText="white-btn-text"
        onPress={improveWithAI}
        disabled={loading}
        variant="forms-transparent-btn"
        image={require("@/assets/images/whiteStar.png")}
        style={{
          backgroundColor: COLORS.PRIMARY_BUTTON_COLOR,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 9.2,
  },
  textAreaContainer: {
    position: "relative",
    marginBottom: 17,
  },
  textArea: {
    borderWidth: 0.8,
    borderColor: COLORS.PRIMARY_BORDER_GREY,
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    backgroundColor: COLORS.CARD_BG,
    minHeight: 110,
  },
});

export default AboutSection;
