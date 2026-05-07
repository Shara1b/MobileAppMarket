import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

type BenefitCard = {
  smille: string;
  title: string;
  description: string;
};

type EarlyBirdBenefitsProps = {
  data: BenefitCard[];
};

const EarlyBirdBenefits: React.FC<EarlyBirdBenefitsProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <StyledText
        variant="title"
        size="regular"
        style={{ textAlign: "center", marginBottom: 25 }}
      >
        Преимущества для первых пользователей
      </StyledText>

      <View style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <StyledText size="medium-large">{item.smille}</StyledText>
            <View style={styles.textcard}>
              <StyledText variant="title" size="medium">
                {item.title}
              </StyledText>
              <StyledText variant="subtitle-grey" size="small">
                {item.description}
              </StyledText>
            </View>
          </View>
        ))}
      </View>
      <StyledText variant="title" size="small">
        🚀 Уже присоединились 500+ ранних участников
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 45,
    gap: 16,
  },
  card: {
    width: "100%",
    borderWidth: 0.8,
    borderRadius: 16,
    borderColor: "#F3F4F6",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  textcard: {
    alignItems: "flex-start",
    gap: 4,
  },
});

export default EarlyBirdBenefits;
