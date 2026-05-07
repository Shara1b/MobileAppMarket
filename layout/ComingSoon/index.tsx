import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { ScrollView, StyleSheet, View } from "react-native";
import EarlyAccessForm from "./EarlyAccessForm";
import EarlyAccessSection from "./EarlyAccessSection";
import EarlyBirdBenefits from "./EarlyBirdBenefits";
import SubstitleContent from "./SubstilteContent";

const ComingSoon = () => {
  const dataCard = [
    {
      smille: "🎁",
      title: "Комиссия 0%",
      description: "0%  комиссии на все сделки после запуска.",
    },
    {
      smille: "⚡",
      title: "Приоритетный подбор",
      description: "Получите доступ к заказам раньше всех",
    },
    {
      smille: "💎",
      title: "Пожизненные привилегии",
      description: "Навсегда сохраните лучшие условия",
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <StyledText variant="logo" size="regular">
            Light
          </StyledText>
          <StyledButton
            variant="transparment"
            variantText="tag"
            sizeText="medium"
            lable="Выйти"
          />
        </View>
        <SubstitleContent />
        <EarlyAccessSection targetDate={new Date("2026-06-16T00:00:00")} />
        <EarlyAccessForm />
        <EarlyBirdBenefits data={dataCard} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },
});

export default ComingSoon;
