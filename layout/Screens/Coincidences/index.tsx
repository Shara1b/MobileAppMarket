import Forbidden from "@/common/ErrorScreen/Forbidden";

export default function CoincidencesScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <Forbidden />;
  }

  return null;
}
