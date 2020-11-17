import { ReactNode } from "react";

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

export type TypographyProps = { children: ReactNode };

export type TabGridSize = {
  xs:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  sm:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  md:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
};
