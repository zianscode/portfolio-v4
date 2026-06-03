export function getBubbleStyle(_userId: string, isDark: boolean) {
  if (isDark) {
    return { backgroundColor: "#262626" };
  }
  return { backgroundColor: "#f0f0f0" };
}
