import EmptySearchResult from "@/common/EmptySearchResult";

export default function SearchScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <EmptySearchResult />;
  }

  return null;
}
