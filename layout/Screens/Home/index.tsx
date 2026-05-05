import ServiceUnavailable from "@/common/ErrorScreen/ServiceUnavailable";

export default function HomeScreen() {
  const hasResults = false;

  if (!hasResults) {
    return <ServiceUnavailable />;
  }

  return null;
}
