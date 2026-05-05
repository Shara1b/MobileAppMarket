import Conflict from "@/common/ErrorScreen/Conflict";

export default function SearchScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <Conflict />;
  }

  return null;
}
