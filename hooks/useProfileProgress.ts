// hooks/useProfileProgress.ts
import { useEffect, useState } from "react";

interface ProfileFormData {
  displayName?: string;
  professionalTitle?: string;
  location?: string;
  about?: string;
  skills?: string[];
  experienceLevel?: string;
  yearsOfExperience?: string;
  rateType?: string;
  rate?: string;
  portfolio?: any[];
}

const calculateProgress = (data: ProfileFormData): number => {
  let filled = 0;
  let total = 0;

  total += 3;
  if (data.displayName?.trim()) filled++;
  if (data.professionalTitle?.trim()) filled++;
  if (data.location?.trim()) filled++;

  total += 1;
  if (
    data.about?.trim() &&
    data.about !== "Расскажите о своем опыте и навыках..."
  )
    filled++;

  total += 1;
  if (data.skills && data.skills.length >= 3) filled++;

  total += 1;
  if (data.experienceLevel) filled++;

  total += 1;
  if (data.yearsOfExperience?.trim() && parseInt(data.yearsOfExperience) > 0)
    filled++;

  total += 2;
  if (data.rateType) filled++;
  if (data.rate?.trim() && parseInt(data.rate) > 0) filled++;

  total += 1;
  if (data.portfolio && data.portfolio.length >= 1) filled++;

  return Math.round((filled / total) * 100);
};

export const useProfileProgress = (formData: ProfileFormData) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = calculateProgress(formData);
    setProgress(newProgress);
  }, [formData]);

  return { progress };
};
