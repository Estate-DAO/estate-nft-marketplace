const E8S = Math.pow(10, 8);

export const toE8s = (num: number | bigint) => Number(num) * E8S;
export const fromE8s = (num: number | bigint) => Number(num) / E8S;
