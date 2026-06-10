import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import AddSkillModal from "./AddSkillModal";

const INITIAL_SKILLS = [
  "UX/UI Дизайн",
  "Figma",
  "Прототипирование",
  "Пользовательские исследования",
];

const SUGGESTED_SKILLS = [
  "Adobe XD",
  "Sketch",
  "Design Systems",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "After Effects",
  "Проведение интервью",
  "Создание персонажей",
  "Юзабилити-тестирование",
  "Анализ конкурентов",
  "Информационная архитектура",
  "Карты пользовательских путей",
  "Веб-дизайн",
  "Мобильный дизайн",
  "Адаптивный дизайн",
  "Tilda",
  "Webflow",
  "HTML/CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Material Design",
  "Human Interface Guidelines",
  "Miro",
  "Notion",
  "Zeplin",
];

const SkillsSection = () => {
  const [skills, setSkills] = useState<string[]>(INITIAL_SKILLS);
  const [modalVisible, setModalVisible] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Состояние для случайных предложений в нижнем блоке
  const [randomSuggestions, setRandomSuggestions] = useState<string[]>(
    SUGGESTED_SKILLS.slice(0, 3),
  );

  const getRandomSuggestions = () => {
    const shuffled = [...SUGGESTED_SKILLS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Функция для замены навыка на новый случайный
  const getRandomSkill = (currentSkill: string) => {
    const availableSkills = SUGGESTED_SKILLS.filter(
      (skill) => skill !== currentSkill && !skills.includes(skill),
    );
    if (availableSkills.length === 0) return currentSkill;
    return availableSkills[Math.floor(Math.random() * availableSkills.length)];
  };

  // Обновление одного предложенного навыка
  const refreshSuggestion = (index: number) => {
    setRandomSuggestions((prev) => {
      const newSuggestions = [...prev];
      const currentSkill = newSuggestions[index];
      const newSkill = getRandomSkill(currentSkill);
      newSuggestions[index] = newSkill;
      return newSuggestions;
    });
  };

  // Добавление навыка и его замена на новый
  const handleAddSuggestedSkill = (skill: string, index: number) => {
    if (!skills.includes(skill)) {
      setSkills((prev) => [...prev, skill]);
      refreshSuggestion(index);
    }
  };

  // Открытие модалки
  const openAddModal = () => {
    setSuggestions(getRandomSuggestions());
    setModalVisible(true);
  };

  // Добавление навыка из модалки (новая функция)
  const handleAddSkill = (skill: string) => {
    if (skills.includes(skill)) {
      Alert.alert("Ошибка", "Такой навык уже добавлен");
      return;
    }
    setSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText variant="button-text-grey" size="secondary">
          Навыки и экспертиза
        </StyledText>
        <StyledText variant="subtitle" size="small">
          Ваши навыки
        </StyledText>
      </View>

      <View style={styles.skillsContainer}>
        {skills.map((item, index) => (
          <View key={`${item}-${index}`} style={styles.skillChip}>
            <StyledText size="small" variant="white-btn-text">
              {item}
            </StyledText>
            <TouchableOpacity onPress={() => removeSkill(item)}>
              <Icon name="close" size={14} color={COLORS.CARD_BG} />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <StyledButton
        variant="add-file-btn"
        style={{
          minHeight: 40,
          maxWidth: 130,
          borderColor: COLORS.PRIMARY_BORDER_GREY,
        }}
        onPress={openAddModal}
        icon="add"
        sizeIcon={14}
        colorIcon={COLORS.SUBTITLE_GREY}
        lable="Добавить"
        variantText="subtitle-grey"
        sizeText="small"
      />

      {skills.length > 0 && (
        <View style={styles.extraSkillsContainer}>
          {randomSuggestions.map((skill, index) => (
            <StyledButton
              key={`${skill}-${index}`}
              variant="transparment-border"
              style={{
                borderStyle: "solid",
                backgroundColor: COLORS.CARD_BG,
                borderColor: COLORS.PRIMARY_BUTTON_COLOR,
              }}
              onPress={() => handleAddSuggestedSkill(skill, index)}
              lable={skill}
              variantText="button-text-grey"
              sizeText="small"
            />
          ))}
        </View>
      )}

      <AddSkillModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddSkill={handleAddSkill}
        suggestions={suggestions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  skillChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_BUTTON_COLOR,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  extraSkillsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 16,
    paddingVertical: 16,
    borderWidth: 1.6,
    borderColor: COLORS.TAG_BG,
    borderRadius: 14,
    backgroundColor: COLORS.TAG_BG,
  },
});

export default SkillsSection;
