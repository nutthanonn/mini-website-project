import { NumberId } from "../data/number_id";

export function convert_number_to_stringId(n: string): string[][] {
  const final: string[][] = [];
  const number_list = Array.from(n);
  number_list.forEach((e) => {
    final.push(NumberId[e as keyof typeof NumberId]);
  });
  return final;
}
