export const groupByKey = (arr: any[], key: string | number) => {
  return arr.reduce((acc, value) => {
    const keys = Array.isArray(value[key]) ? value[key] : [value[key]];
    keys.forEach(key => {
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(value);
    })
    return acc;
  }, {});  
}
