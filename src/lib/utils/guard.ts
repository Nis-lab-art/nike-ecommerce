export function hasItems<T>(
  v: readonly T[] | undefined | null
): v is readonly T[] {
  return Array.isArray(v) && v.length > 0;
}
