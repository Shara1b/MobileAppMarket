import EmptyDailyMatches from "@/common/EmptyDailyMatches";

export default function HomeScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <EmptyDailyMatches />;
  }

  return null;
}
