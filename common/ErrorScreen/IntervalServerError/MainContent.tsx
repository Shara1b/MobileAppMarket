import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

type MainContentProps = {
  smille: string;
  title: string;
  description: string;
  errorCode: string;
};

const MainContent: React.FC<MainContentProps> = ({
  smille,
  title,
  description,
  errorCode,
}) => {
  const now = new Date();
  const time = now.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <StyledText size="large">{smille}</StyledText>
      <View style={styles.box}>
        <StyledText variant="title" size="medium-large">
          {title}
        </StyledText>
        <View style={styles.substilte}>
          <StyledText
            variant="subtitle-grey"
            size="medium"
            style={{ textAlign: "center" }}
          >
            {description}
          </StyledText>
        </View>
        <StyledText variant="subtitle-grey" size="ower-small">
          {errorCode} • {time}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 48,
  },
  substilte: {
    borderWidth: 0.8,
    borderRadius: 16,
    borderColor: COLORS.PRIMARY_BORDER_GREY,
    backgroundColor: COLORS.CARD_BG,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  box: {
    gap: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainContent;
