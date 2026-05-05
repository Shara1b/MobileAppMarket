import NotFound from "@/common/ErrorScreen/NotFound";

export default function HomeScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <NotFound />;
  }

  return null;
}
