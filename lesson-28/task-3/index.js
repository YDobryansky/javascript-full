export function mult(a) {
  return function (b) {
    return a * b;
  };
}

export const twice = mult(2);
export const triple = mult(3);
