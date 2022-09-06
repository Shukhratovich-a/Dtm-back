const toCamel = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

const isObject = (obj: object) => {
  return (
    obj === Object(obj) &&
    !Array.isArray(obj) &&
    typeof obj !== "function" &&
    Object.keys(obj).length > 0
  );
};

const keysToCamel = (obj: any): any => {
  if (isObject(obj)) {
    const n: any = {};

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = keysToCamel(obj[k]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return keysToCamel(i);
    });
  }

  return obj;
};

export { toCamel, isObject, keysToCamel };
