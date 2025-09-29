import { formatName } from "./formatName";

export function isDuplicate(list: string[], name: string): boolean {
  return list.map(formatName).includes(formatName(name));
}
