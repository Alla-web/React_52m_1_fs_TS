import { Lesson06ContainerStyled } from "./styles";

function Lesson06() {
  //Типы переменных указываются после названия через двоеточие

  //Типизация строк - string
  let userName: string = "Tom";
  userName = "Mary";
  userName = "";
  userName = "John";
  //userName=2; - ошибка: тип не строка, как было указано при объявление этой переменной

  let fullName: string = `${userName} Smith`;

  let result: string = 1 + 2 + "3";

  //2. Типизация чисел - number
  let luckyNumber: number = 23;
  //   luckyNumber = '23'; - ошибка:
  luckyNumber = Infinity;
  luckyNumber = 98.3; //double
  luckyNumber = -10;
  luckyNumber = NaN;
  //   luckyNumber = 23 - "4"; - ошибка: 4 - не число

  //3. Типизация чисел - boolean
  let isAdmin: boolean = true;
  isAdmin = 2 > 1;
  isAdmin = !1; //1 - станет true, а после знака ! станет false
  isAdmin = userName === "John";

  console.log(isAdmin);

  //4. Типизация чисел - null
  let emptyValue: null = null;
  //   emptyValue = 0; - ошибка: 0 - число, а не null
  //   emptyValue = undefined; - ошибка: undefined не null

  //5. Типизация чисел - undefined
  let data: undefined = undefined;
  // data = null; - ошибка: null не undefined
  // data = 0; - ошибка: 0 не undefined

  //6. Типизация чисел - bigint + добавляем к числу справа от = букву n
  let bigN: bigint = 123777888999999n;
  // bigN = 123555555558888899999999; - ошибка: справа в числе отсутствует n

  //7. Типизация Symbol - symbol
  let uniq: symbol = Symbol("description");
  //   uniq = 23; - ошибка: символы пишутся только в '', всё остальное не символы

  //8. Типизация массива - указываем тип данных, которые будет содержать массив, затем квадратные скобки
  const colors: string[] = ["red", "black", "123"];
  // colors.push(2374); - ошибка: мы пытаемся отправить в
  // массив строк не строковое значение, т.е. не в ''
  // colors[0] = 01; - ошибка: мы пытаемся изменить элемент массива не нестроку
  colors[2] = "green";
  console.log(colors);

  //9. Кортеж (tupel) - указываем в квадратных скобках структур массива, а вместо элементов подставляем типы
  const fruits: [string, number] = ["apple", 4];
  //ограничение работает только на этапе создания, потом можно добавлять в такой массив разные типы
  fruits.push("cherry");
  console.log(fruits);

  //10. Типизация возвращаемого значения функции - тип доставляется после круглых скобок функции
  //   void - тип функций, которые ничего не возвращают
  const showMessage = (): void => {
    console.log("Hello");
    colors[1] = "pink";
  };

  // для функций, которые возвращают что-то, после : указывается тип возвращаемого значения
  const getSum = (): number => {
    const sum: number = 2 + 4;
    return sum;
  };

  //11. Типизация параметров функции - тип указывается после каждого параметра через :
  // параметрам функции можно задавать значения по умолчанию: age: number = 18
  const getUserData = (firstName: string, age: number = 18): string => {
    return `${firstName} - ${age}`;
  };

  //в JS мы могли взять параметризированную функцию и ничего в неё не передать при вызове.
  //они бы были undefined
  //в TS так не прокатит - выдаст ошибку
  console.log(getUserData("Alla", 42));

  //вызываем функцию неправильно:
  // console.log(getUserData("Alla", "42")); - ошибка

  //вызываем функцию с учётом значения по умолчанию для параметра age (18)
  console.log(getUserData("Mary"));

  //12. Автоматическое определение типовб происходит только при условии
  // задания значения в момент объявления переменной
  let name = "Bob"; //тип определился автоматически
  //   name = 123; - ошибка: тип определён как string

  const numbers = [1, 2, 3, 4, 5, 6];
  //   numbers.push('35'); - ошибка: пфтаемся отправить строку в массив чисел

  //автоопределение типа возвращаемого значения функции:
  //или указываем значение параметра по умолчанию
  const getNumber1 = (num = 2) => {
    return num;
  };
  //или, если значение по умолчанию не нужно в функции, задаём тип данных параметра
  const getNumber2 = (num: number) => {
    return num;
  };

  //13. Union типы, позволяют указывать несколько типов через значк |
  //можно указывать множество типов только через знак |
  let color: string | number = "red";
  color = 2563;
  // color = true; - ошибка: boolean не бфл указан в типах данных при объявлении переменной color

  const example: (string | boolean)[] = ['fruit', true];

  return (
    <Lesson06ContainerStyled>
      Lesson06-TypeScript Introduction<br></br>
      {fullName} <br></br>
      {result} <br></br>
      {}
    </Lesson06ContainerStyled>
  );
}

export default Lesson06;
