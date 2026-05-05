import PaymentRequired from "@/common/ErrorScreen/PaymentRequired";

export default function HomeScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <PaymentRequired />;
  }

  return null;
}
