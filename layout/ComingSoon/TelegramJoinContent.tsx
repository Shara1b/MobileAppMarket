import StyledText from "@/components/StyledText";
import { Image, StyleSheet, View } from "react-native";

const TelegramJoinContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image source={require("@/assets/images/qrtelegram.png")} style={{}} />
      </View>
      <View style={styles.body}>
        <StyledText style={styles.textframe} variant="tag" size="ower-small">
          @light_freelance
        </StyledText>
        <StyledText
          style={{ textAlign: "center", width: 174 }}
          variant="subtitle-grey"
          size="small"
        >
          Отсканируйте код, чтобы присоединиться
        </StyledText>
        <StyledText
          style={{ textAlign: "center" }}
          variant="subtitle-grey"
          size="ower-small"
        >
          Получайте новости о запуске, ранний доступ и закулисный контент
        </StyledText>
        <StyledText
          style={{ textAlign: "center", width: "100%" }}
          variant="tag"
          size="small"
        >
          Или перейдите: https://t.me/+BXhZ_rMv62E3ZjIy
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
    marginTop: 20,
    paddingHorizontal: 32,
  },
  frame: {
    width: "50%",
    borderWidth: 1.6,
    borderRadius: 14,
    borderColor: "#F3F4F6",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 32,
  },
  body: {
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 71,
  },
  textframe: {
    width: "50%",
    borderWidth: 1.6,
    borderRadius: 22,
    borderColor: "#ECEEF7",
    backgroundColor: "#ECEEF7",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default TelegramJoinContent;
