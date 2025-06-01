export type Settings = {
  characterLength: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
};

export type ColumnsStrength = {
  id: number;
  active: boolean;
};

export type Strength = "" | "weak" | "medium" | "strong";
