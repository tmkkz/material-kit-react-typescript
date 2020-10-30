const Colors = {
  Primary: "primary",
  Warning: "warning",
  Danger: "danger",
  Success: "success",
  Info: "info",
  Rose: "rose",
  Gray: "gray",
  GrayBackGround: "grayBackground",
} as const;

export type Colors = typeof Colors[keyof typeof Colors];
