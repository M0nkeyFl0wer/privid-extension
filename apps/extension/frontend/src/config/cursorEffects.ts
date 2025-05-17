
// Enable/disable cursor effects globally
export const cursorEffects = {
  enableGlow: true,
  enableInteractiveLogo: true,
};

// Export a helper to disable all effects at once
export const disableAllCursorEffects = () => {
  cursorEffects.enableGlow = false;
  cursorEffects.enableInteractiveLogo = false;
};
