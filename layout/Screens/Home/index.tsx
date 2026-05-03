import EmptyFavorites from "@/common/EmptyFavorites";

export default function HomeScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <EmptyFavorites />;
  }

  return null;
}
