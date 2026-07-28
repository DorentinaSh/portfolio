/** Tiny classNames joiner — filters out falsy values so you can pass conditionals. */
export function cn(
  ...inputs: Array<string | false | null | undefined>
): string {
  return inputs.filter(Boolean).join(" ");
}
