// let s = 'as';
// let age: number;
// age = 1;
// const user = {
//   name: 'micky',
//   age: 10,
// };
// //enum
// enum TypeUserEnum {
//   STUDENT = 'student',
//   TEACHER = 'teacher',
//   ADMIN = 'admin',
// }

// interface User {
//   offsetData: any;
//   name: string;
//   age: number | string | number[];
//   id?: number;
//   isActive: boolean;
//   schoolIds: number[];
//   getListSchool: () => void;
//   typeUser: TypeUserEnum;
// }
// const user2: User = {
//   name: 'ali',
//   age: 10,
//   getListSchool: () => {},
//   isActive: true,
//   offsetData: 'asa',
//   schoolIds: [1, 3],
//   typeUser: TypeUserEnum.ADMIN,
//   // id: 1,
// };

// // => {data:data from server}
// interface Data<T, K> {
//   data: T;
//   type: K;
// }
// const data: Data<User, string> = {
//   data: user2,
//   type: 'awas',
// };

class Point {
  x: number;
  y: number;
  readonly flag: boolean = true;
  constructor(x: number, y: number) {
    (this.x = x), (this.y = y);
    this.flag = false;
  }
}
const point = new Point(1, 2);
// point.x = 1;
// point.y = 2;

console.log('🚀 ~ file: script.ts:54 ~ point:', point);

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

enum TypeUserEnum {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}
let typeUser: TypeUserEnum = TypeUserEnum.ADMIN;

function calculator(a: number, b?: number): number | undefined {
  if (b) {
    return a + b;
  }
  
}

const car: { type: string; model: string; year: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
};
