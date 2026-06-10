import StyledButton from "@/components/StyledButton";
import StyledInput from "@/components/StyledInput";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

// Типизация пропсов (какие данные будет получать компонент)
interface AddSkillModalProps {
  visible: boolean; // видимость модалки
  onClose: () => void; // функция закрытия
  onAddSkill: (skill: string) => void; // функция добавления навыка
  suggestions: string[]; // массив предложений
}

const AddSkillModal = ({
  visible,
  onClose,
  onAddSkill,
  suggestions,
}: AddSkillModalProps) => {
  // Состояние для вводимого навыка (переносим сюда из SkillsSection)
  const [newSkill, setNewSkill] = useState("");

  // Функция добавления навыка
  const handleAdd = () => {
    const trimmed = newSkill.trim();
    if (trimmed === "") {
      return;
    }
    onAddSkill(trimmed); // вызываем функцию из родителя
    setNewSkill(""); // очищаем поле
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <StyledText size="medium" variant="title">
                Добавить навык
              </StyledText>
              <TouchableOpacity onPress={onClose}>
                <Icon name="close" size={20} color={COLORS.TITLE_GREY} />
              </TouchableOpacity>
            </View>

            <StyledInput
              variant="forms-input"
              placeholder="Введите навык..."
              value={newSkill}
              onChangeText={setNewSkill}
              autoFocus={true}
              onSubmitEditing={handleAdd}
              returnKeyType="done"
            />

            <StyledText size="small" variant="subtitle-grey">
              Возможно, вы ищете:
            </StyledText>
            <View style={styles.suggestionsContainer}>
              {suggestions.map((skill) => (
                <StyledButton
                  key={skill}
                  variant="transparment-border"
                  style={{
                    borderStyle: "solid",
                    backgroundColor: COLORS.CARD_BG,
                    borderColor: COLORS.PRIMARY_BUTTON_COLOR,
                  }}
                  onPress={() => setNewSkill(skill)}
                  lable={skill}
                  variantText="subtitle"
                  sizeText="small"
                />
              ))}
            </View>

            <StyledButton
              variant="medge"
              onPress={handleAdd}
              lable="Добавить"
              variantText="title"
              sizeText="medium"
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 20,
    padding: 20,
    width: "80%",
    maxWidth: 340,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  suggestionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
    marginBottom: 24,
  },
});

export default AddSkillModal;
