import StyledText from "@/components/StyledText";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const EarlyAccessSection: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const timeUnits = [
    { value: timeLeft.days, label: "ДНЕЙ" },
    { value: timeLeft.hours, label: "ЧАСОВ" },
    { value: timeLeft.minutes, label: "МИНУТ" },
    { value: timeLeft.seconds, label: "СЕКУНД" },
  ];

  return (
    <View style={styles.container}>
      <StyledText variant="subtitle-grey" size="ower-small">
        ЗАПУСК ЧЕРЕЗ
      </StyledText>
      <View style={styles.box}>
        {timeUnits.map((unit, index) => (
          <View key={index} style={styles.block}>
            <StyledText variant="timer-value" size="large">
              {formatNumber(unit.value)}
            </StyledText>
            <StyledText
              size="ower-small"
              style={{ fontWeight: 500, color: "#B7C5F9" }}
            >
              {unit.label}
            </StyledText>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  block: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 16,
    borderWidth: 0.8,
    borderColor: "#F3F4F6",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default EarlyAccessSection;
