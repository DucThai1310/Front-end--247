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
    constructor(x, y) {
        this.flag = true;
        (this.x = x), (this.y = y);
        this.flag = false;
    }
}
const point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
console.log('🚀 ~ file: script.ts:54 ~ point:', point);
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
var TypeUserEnum;
(function (TypeUserEnum) {
    TypeUserEnum["STUDENT"] = "student";
    TypeUserEnum["TEACHER"] = "teacher";
    TypeUserEnum["ADMIN"] = "admin";
})(TypeUserEnum || (TypeUserEnum = {}));
let typeUser = TypeUserEnum.ADMIN;
//# sourceMappingURL=script.js.map