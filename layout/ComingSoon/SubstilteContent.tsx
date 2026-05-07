import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const SubstitleContent = () => {
  return (
    <View style={styles.container}>
      <StyledText size="ower-large">✨</StyledText>
      <View style={styles.box}>
        <StyledText
          variant="title"
          size="large"
          style={{ textAlign: "center", marginBottom: 17 }}
        >
          Грядет нечто удивительное
        </StyledText>
        <StyledText
          variant="button-text-blue"
          size="secondary"
          style={{ textAlign: "center", marginBottom: 12 }}
        >
          Light — AI-фриланс платформа
        </StyledText>
        <StyledText
          variant="subtitle-grey"
          size="small"
          style={{ textAlign: "center", width: 319 }}
        >
          Мы создаем будущее фриланса. Станьте первым, кто получит доступ.
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubstitleContent;
