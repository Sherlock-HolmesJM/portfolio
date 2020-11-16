const wrap = (i: number, c: number, n: number) => {
   if (i === 0) return mod(c, n);

   return 1;
}

const mod = (x: number, y: number) => (x % y + y) % y;

export default wrap;