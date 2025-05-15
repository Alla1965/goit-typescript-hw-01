function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const person = { name: 'Alice' };
const info = { age: 25 };

const result = merge(person, info);
// Тип result: { name: string; age: number }