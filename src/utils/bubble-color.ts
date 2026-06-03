const BUBBLE_HUES = [
  210, 160, 280, 30, 340, 180, 260, 350, 190, 40, 120, 300,
];

export function getBubbleStyle(userId: string, isDark: boolean) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = BUBBLE_HUES[Math.abs(hash) % BUBBLE_HUES.length];

  if (isDark) {
    return { backgroundColor: `hsla(${hue}, 35%, 22%, 0.65)` };
  }
  return { backgroundColor: `hsla(${hue}, 55%, 92%, 0.85)` };
}
