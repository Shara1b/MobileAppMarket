import EmptyDailyMatches from "@/common/EmptyDailyMatches";

export default function CoincidencesScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <EmptyDailyMatches />;
  }

  return null;
}
