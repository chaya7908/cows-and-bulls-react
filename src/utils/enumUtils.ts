export function randomEnum<T>(anEnum: T, max?: number) {
  const enumKeys = Object.keys(anEnum as Object);

  const randomIndex = Math.floor(Math.random() * (max || enumKeys.length))
  const randomEnumKey = enumKeys[randomIndex]

  //@ts-ignore
  return anEnum[randomEnumKey];
}

export function getEnumByIndex<T>(anEnum: T, index: number) {
  const enumKeys = Object.keys(anEnum as Object);
  const enumKey = enumKeys[index];

  //@ts-ignore
  return anEnum[enumKey];
}