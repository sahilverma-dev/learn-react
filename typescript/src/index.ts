let name1: string = "asfassdf";
let name2: number = 654654;
let name3: boolean = false;
let name4: string[] = ["asfassdf"];

const asfasdf: {} = {};

let array: [number, Function] = [321321, () => {}];

const sayHello = (data?: string): void => {
  console.log(data);
};
sayHello();

// sayHello("asfasdf");

// const kuchBhi = () => {
//   return 0;
// };

type FunType = (asdfasf: string, asdfa: number) => string;

const fun: FunType = (asdf, asdfasdf) => {
  return "0";
};

function test(pata: string): number {
  return 0;
}

// // sayHello()

type TestType = {
  id: string;
  name: string;
  age: number;
};

interface TestInterface {
  id: string;
  name: string;
  age: number;
  fun?: () => void;
}

let obj1: TestType = {
  id: "asdfasd",
  name: "asdfas",
  age: 10,
};

const obj2: TestInterface = {
  name: "asdfasdf",
  id: "asdfasdf",
  age: 30,
};

interface Type1 {
  property1: string;
  property2: number;
}

interface Type2 extends Type1 {
  property3: boolean;
}

const newData: Type2 = {
  property1: "asdfas",
  property2: 0,
  property3: false,
};

type GenericFun<T> = () => {
  asdfasd: string;
  data: T;
};

const genFun: GenericFun<number> = () => {
  return {
    asdfasd: "asfasdf",
    data: 0,
  };
};

const genFun1: GenericFun<{
  data: string;
}> = () => {
  return {
    asdfasd: "asfasdf",
    data: {
      data: "asfasd",
    },
  };
};

type Id = string | number;

let id: Id = "asdfasdfsd";
id = 65465465;

interface ReelPost {
  type: "reel";
  duration: number;
}

interface ImagePost {
  type: "image";
  caption: string;
}

type Post = ImagePost | ReelPost;

const post: Post = {
  type: "reel",
  duration: 3,
};

const res = (data: any) => {
  data as [];
};
