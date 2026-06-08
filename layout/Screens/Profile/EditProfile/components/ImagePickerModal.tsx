import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

interface ImagePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
  onDelete?: () => void;
  hasAvatar?: boolean;
}

const ImagePickerModal = ({
  visible,
  onClose,
  onCamera,
  onGallery,
  onDelete,
  hasAvatar = false,
}: ImagePickerModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Заголовок */}
            <View style={styles.header}>
              <StyledText size="medium" variant="button-text-grey">
                Фото профиля
              </StyledText>
              <TouchableOpacity onPress={onClose}>
                <Icon name="close" size={24} color="#1D1D1F" />
              </TouchableOpacity>
            </View>

            {/* Описание */}
            <StyledText size="small" variant="subtitle-grey">
              Выберите источник для загрузки фото
            </StyledText>

            {/* Кнопка "Сделать фото" */}
            <TouchableOpacity style={styles.optionButton} onPress={onCamera}>
              <View style={styles.optionIcon}>
                <Icon name="camera-alt" size={24} color="#1D1D1F" />
              </View>
              <View>
                <StyledText size="medium" variant="title">
                  Сделать фото
                </StyledText>
                <StyledText size="small" variant="subtitle-grey">
                  Сфотографируйте на камеру
                </StyledText>
              </View>
            </TouchableOpacity>

            {/* Кнопка "Выбрать из галереи" */}
            <TouchableOpacity style={styles.optionButton} onPress={onGallery}>
              <View style={styles.optionIcon}>
                <Icon name="photo-library" size={24} color="#1D1D1F" />
              </View>
              <View>
                <StyledText size="medium" variant="title">
                  Выбрать из галереи
                </StyledText>
                <StyledText size="small" variant="subtitle-grey">
                  Загрузите фото из галереи
                </StyledText>
              </View>
            </TouchableOpacity>

            {/* Кнопка "Удалить фото" (если есть) */}
            {hasAvatar && (
              <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Icon name="delete" size={24} color="#FF3B30" />
                <StyledText size="medium" style={styles.deleteText}>
                  Удалить фото
                </StyledText>
              </TouchableOpacity>
            )}

            {/* Кнопка "Отмена" */}
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <StyledText size="medium" variant="subtitle">
                Отмена
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: COLORS.SVG_BG,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  modalContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.PRIMARY_BORDER_GREY,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_BORDER_GREY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    marginTop: 8,
  },
  deleteText: {
    marginLeft: 16,
    color: COLORS.PRYMARY_RED_COLOR,
    fontWeight: "500",
  },
  cancelButton: {
    marginTop: 20,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_BORDER_GREY,
    borderRadius: 12,
  },
});

export default ImagePickerModal;
