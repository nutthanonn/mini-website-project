/*


แนวนอน

ขีดบน = first-x-line
ขีดกลาง = mid-x-line
ขีดล่าง = last-x-line

แนวตั้ง

ขีดบนแรก = on-first-y-line
ขีดบนสอง = on-last-y-line

ขีดล่างแรก = under-first-y-line
ขีดล่างสอง = under-last-y-line


*/

interface NumberIdType {
  "0": string[];
  "1": string[];
  "2": string[];
  "3": string[];
  "4": string[];
  "5": string[];
  "6": string[];
  "7": string[];
  "8": string[];
  "9": string[];
}

export const NumberId: NumberIdType = {
  "0": [
    "first-x-line",
    "on-first-y-line",
    "on-last-y-line",
    "under-first-y-line",
    "under-last-y-line",
    "last-x-line",
  ],
  "1": ["on-last-y-line", "under-last-y-line"],
  "2": [
    "first-x-line",
    "on-last-y-line",
    "mid-x-line",
    "under-first-y-line",
    "last-x-line",
  ],
  "3": [
    "first-x-line",
    "mid-x-line",
    "last-x-line",
    "on-last-y-line",
    "under-last-y-line",
  ],
  "4": ["on-first-y-line", "mid-x-line", "on-last-y-line", "under-last-y-line"],
  "5": [
    "first-x-line",
    "mid-x-line",
    "last-x-line",
    "on-first-y-line",
    "under-last-y-line",
  ],
  "6": [
    "first-x-line",
    "mid-x-line",
    "last-x-line",
    "on-first-y-line",
    "under-first-y-line",
    "under-last-y-line",
  ],
  "7": ["first-x-line", "under-last-y-line", "on-last-y-line"],
  "8": [
    "first-x-line",
    "mid-x-line",
    "last-x-line",
    "on-first-y-line",
    "on-last-y-line",
    "under-first-y-line",
    "under-last-y-line",
  ],
  "9": [
    "first-x-line",
    "mid-x-line",
    "last-x-line",
    "on-first-y-line",
    "on-last-y-line",
    "under-last-y-line",
  ],
};
