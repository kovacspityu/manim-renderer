const snakeToCamel = (str) =>
  str.replace(/([-_][a-z])/g, (group) =>
    group
      .toUpperCase()
      .replace("-", "")
      .replace("_", "")
  );

export function convertSnakeCaseDictToCamelCase(dict) {
  let camelCaseDict = {};
  for (let [key, val] of Object.entries(dict)) {
    camelCaseDict[snakeToCamel(key)] = val;
  }
  return camelCaseDict;
}
