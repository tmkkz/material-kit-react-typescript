/**
 * Constructs a union type, but if same name properties exist, properties selected from type P.
 */
export type Extend<T, P> = Pick<T, Exclude<keyof T, keyof P>> & P;

export type Colors =
  | "primary"
  | "warning"
  | "danger"
  | "success"
  | "info"
  | "rose";

export type Size = "sm" | "lg";
