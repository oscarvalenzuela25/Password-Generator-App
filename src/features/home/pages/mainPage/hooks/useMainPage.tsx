import { useEffect, useState } from "react";
import type { ColumnsStrength, Settings, Strength } from "../../../types/home";

const defaultValues: Settings = {
  characterLength: 0,
  upperCase: false,
  lowerCase: false,
  numbers: false,
  specialCharacters: false,
};

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SPECIAL_CHARS = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const useMainPage = () => {
  const [settings, setSettings] = useState<Settings>(defaultValues);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<Strength>("");
  const [columnsStrength, setColumnsStrength] = useState<ColumnsStrength[]>([]);

  const maxCharacterLength = 25;
  const percent = (settings.characterLength / maxCharacterLength) * 100;

  const handleChangeSettings = (name: string, value: boolean | number) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const getRandomChar = (charset: string) => {
    const index = Math.floor(Math.random() * charset.length);
    return charset[index];
  };

  const shuffleArray = (array: string[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.value);
  };

  const handlePasswordGenerate = () => {
    const {
      characterLength,
      upperCase,
      lowerCase,
      numbers,
      specialCharacters,
    } = settings;

    let availableChars = "";
    const guaranteedChars: string[] = [];

    // Agregamos los tipos seleccionados
    if (upperCase) {
      availableChars += UPPERCASE_CHARS;
      guaranteedChars.push(getRandomChar(UPPERCASE_CHARS));
    }

    if (lowerCase) {
      availableChars += LOWERCASE_CHARS;
      guaranteedChars.push(getRandomChar(LOWERCASE_CHARS));
    }

    if (numbers) {
      availableChars += NUMBER_CHARS;
      guaranteedChars.push(getRandomChar(NUMBER_CHARS));
    }

    if (specialCharacters) {
      availableChars += SPECIAL_CHARS;
      guaranteedChars.push(getRandomChar(SPECIAL_CHARS));
    }

    // Si el usuario no seleccionó nada, usamos un set básico por defecto
    if (!availableChars) {
      availableChars = LOWERCASE_CHARS + NUMBER_CHARS;
    }

    const remainingLength = characterLength - guaranteedChars.length;
    const password = [...guaranteedChars];

    for (let i = 0; i < remainingLength; i++) {
      password.push(getRandomChar(availableChars));
    }

    const finalPassword = shuffleArray(password).join("");
    setPassword(finalPassword);
  };

  // weak	Menos de 2 tipos seleccionados, o longitud < 8
  // medium	2 o 3 tipos seleccionados y longitud >= 8
  // strong	4 tipos seleccionados y longitud >= 12
  const calculatePasswordStrength = (settings: Settings): Strength => {
    const {
      characterLength,
      upperCase,
      lowerCase,
      numbers,
      specialCharacters,
    } = settings;

    const typesSelected = [
      characterLength > 0,
      upperCase,
      lowerCase,
      numbers,
      specialCharacters,
    ].filter(Boolean).length;

    if (!typesSelected) {
      return "";
    }

    if (characterLength < 8 || typesSelected < 3) {
      return "weak";
    }

    if (typesSelected >= 3 && typesSelected < 5 && characterLength >= 8) {
      return "medium";
    }

    if (typesSelected === 5 && characterLength >= 12) {
      return "strong";
    }

    return "medium";
  };

  const calculateColumnsStrength = (strength: Strength): ColumnsStrength[] => {
    const options = {
      "": [false, false, false, false],
      weak: [true, false, false, false],
      medium: [true, true, true, false],
      strong: [true, true, true, true],
    };
    return options[strength].map((active, index) => ({
      id: index,
      active,
    }));
  };

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(settings));
  }, [settings]);

  useEffect(() => {
    setColumnsStrength(calculateColumnsStrength(passwordStrength));
  }, [passwordStrength]);

  return {
    settings,
    password,
    passwordStrength,
    maxCharacterLength,
    percent,
    columnsStrength,
    handleChangeSettings,
    handlePasswordGenerate,
  };
};

export default useMainPage;
