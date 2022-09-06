const toCamel = (str) => {
    return str.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};
const isObject = (obj) => {
    return (obj === Object(obj) &&
        !Array.isArray(obj) &&
        typeof obj !== "function" &&
        Object.keys(obj).length > 0);
};
const keysToCamel = (obj) => {
    if (isObject(obj)) {
        const n = {};
        Object.keys(obj).forEach((k) => {
            n[toCamel(k)] = keysToCamel(obj[k]);
        });
        return n;
    }
    else if (Array.isArray(obj)) {
        return obj.map((i) => {
            return keysToCamel(i);
        });
    }
    return obj;
};
export { toCamel, isObject, keysToCamel };
