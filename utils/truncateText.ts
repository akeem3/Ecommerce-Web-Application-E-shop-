export const truncateText = (str: string, maxLength: number = 25): string => {
  if (str.length <= maxLength) {
    return str;
  }

  return str.substring(0, maxLength) + "...";
};
