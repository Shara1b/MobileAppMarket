import StyledText from "@/components/StyledText";
import { StyleSheet, TextInput, View } from "react-native";

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  optional?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const FormInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  optional = false,
  multiline = false,
  numberOfLines = 1,
  keyboardType = "default",
}: FormInputProps) => {
  return (
    <View style={styles.container}>
      <StyledText size="small" style={styles.label}>
        {label}{" "}
        {optional && (
          <StyledText style={styles.optional}>(необязательно)</StyledText>
        )}
      </StyledText>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    color: "#1D1D1F",
  },
  optional: {
    color: "#8E8E93",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default FormInput;
