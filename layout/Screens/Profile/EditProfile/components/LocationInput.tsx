import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import * as Location from "expo-location";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

interface LocationInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  optional?: boolean;
}

const LocationInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  optional = false,
}: LocationInputProps) => {
  const [loading, setLoading] = useState(false);

  // Функция для получения текущего местоположения
  const getCurrentLocation = async () => {
    setLoading(true);

    try {
      // Запрашиваем разрешение на геолокацию
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ошибка",
          "Нет разрешения на доступ к геолокации. Пожалуйста, разрешите доступ в настройках.",
        );
        return;
      }

      // Получаем текущую позицию
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      // Обратный геокодинг - получаем адрес по координатам
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const address = reverseGeocode[0];
        // Формируем строку с городом и страной
        let locationString = "";

        if (address.city) {
          locationString += address.city;
        } else if (address.region) {
          locationString += address.region;
        }

        if (address.country) {
          locationString += locationString
            ? `, ${address.country}`
            : address.country;
        }

        // Если получили пустую строку, пробуем другие поля
        if (!locationString && address.street) {
          locationString = address.street;
        }

        if (!locationString) {
          locationString = "Местоположение определено";
        }

        onChangeText(locationString);
      } else {
        Alert.alert("Ошибка", "Не удалось определить местоположение");
      }
    } catch (error) {
      console.error("Ошибка при определении местоположения:", error);
      Alert.alert("Ошибка", "Не удалось определить ваше местоположение");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StyledText size="small" style={styles.label}>
        {label}{" "}
        {optional && (
          <StyledText variant="subtitle-grey">(необязательно)</StyledText>
        )}
      </StyledText>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
        />

        <TouchableOpacity
          style={styles.locationButton}
          onPress={getCurrentLocation}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Icon name="my-location" size={22} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    color: COLORS.TITLE_GREY,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER_GREY,
    borderRadius: 10,
    padding: 14,
    paddingRight: 50,
    fontSize: 16,
  },
  locationButton: {
    position: "absolute",
    right: 12,
    padding: 8,
  },
});

export default LocationInput;
