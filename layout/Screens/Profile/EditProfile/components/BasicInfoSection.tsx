import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import FormInput from "./FormInput";
import ImagePickerModal from "./ImagePickerModal";
import LocationInput from "./LocationInput";

interface BasicInfoSectionProps {
  displayName: string;
  setDisplayName: (text: string) => void;
  professionalTitle: string;
  setProfessionalTitle: (text: string) => void;
  location: string;
  setLocation: (text: string) => void;
}

const BasicInfoSection = ({
  displayName,
  setDisplayName,
  professionalTitle,
  setProfessionalTitle,
  location,
  setLocation,
}: BasicInfoSectionProps) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Запросить разрешения
  const requestPermissions = async () => {
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status: libraryStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== "granted" || libraryStatus !== "granted") {
      Alert.alert("Ошибка", "Нужны разрешения для доступа к камере и галерее");
      return false;
    }
    return true;
  };

  // Открыть галерею
  const pickImageFromGallery = async () => {
    setModalVisible(false);
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  // Сделать фото на камеру
  const takePhoto = async () => {
    setModalVisible(false);
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  // Удалить фото
  const deletePhoto = () => {
    setModalVisible(false);
    setAvatar(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText variant="button-text-grey" size="secondary">
          Основная информация
        </StyledText>
        <Icon name="edit" size={24} />
      </View>

      <View style={styles.avatarContainer}>
        <View style={{ position: "relative" }}>
          <Image
            source={
              avatar
                ? { uri: avatar }
                : require("@/assets/images/ImageProfile.png")
            }
            style={{ width: 96, height: 96, borderRadius: 48 }}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="camera-alt" size={20} color="#1D1D1F" />
          </TouchableOpacity>
        </View>
      </View>

      <FormInput
        label="Отображаемое имя"
        value={displayName}
        onChangeText={setDisplayName}
        placeholder="Анна Петрова"
      />

      <FormInput
        label="Профессиональное звание"
        value={professionalTitle}
        onChangeText={setProfessionalTitle}
        placeholder="UX/UI Дизайнер"
      />

      <LocationInput
        label="Местоположение"
        value={location}
        onChangeText={setLocation}
        placeholder="Москва, Россия"
        optional={true}
      />

      <ImagePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCamera={takePhoto}
        onGallery={pickImageFromGallery}
        onDelete={deletePhoto}
        hasAvatar={!!avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 14,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.NOTIFICATION_BG,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.NOTIFICATION_BG,
  },
});

export default BasicInfoSection;
