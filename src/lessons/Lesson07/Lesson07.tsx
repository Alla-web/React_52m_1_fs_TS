import "./styles.css";

function Lesson07() {
  //-----Тип any - любой тип данных
  let city: any = "Charkow";
  city = 23;
  city = true;
  city = ["Charkow", 23, true];

  //-----Типизация объекта через interface
  interface User {
    name: string;
    age?: number; // - age пропустит, или undefined (без этого свойство вообще), или number
    // age: (number | undefined) - должно быть свойство обязательно, а значение обязательно undefined
  }

  //все свойства объекта должны быть прописаны - которые прописаны в interface
  const userData: User = {
    name: "John",
    age: 89,
  };

  const userObj: User = {
    name: "Alla",
    // age: true - ошибка: age в interface прописано как number
    age: undefined,
  };

  //-----Создание интерфейса с одинаковым именем
  interface User {
    //добавляем только новые свойства, старые перезаписать не позволит
    //age: string,
    role?: string | null;
  }

  const user: User = {
    name: "",
    age: 23,
    role: null,
  };

  //-----Наследование interface
  interface Person {
    personFullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    personFullName: "Alla Nazarenko",
    email: "test@gmail.com",
  };

  const adminData: Admin = {
    personFullName: "Natali",
    email: "test@mail.ry",
    adminId: 123,
  };

  ////////////////////////////////////////////////////////////////////////////

  //-----Типизация через type

  //-----используем type для создания усложнённого типа
  type Weight = string | number | null; //использовали в строке 73

  //используем type для создания типа объекта
  type Animal = {
    name: string;
    weight?: Weight;
  };

  const pandaData: Animal = {
    name: "panda",
    weight: 45,
  };

  const personWeight: Weight = null;

  //Объединение типов
  type NewAnimal = Animal & { country: string };

  const zebraAnimal: NewAnimal = {
    name: "Zebra",
    weight: 45,
    country: "UAR",
  };

  //-----Generic & Type - переменная, в которую мы можем подставить нужный тип, в момент использования type
  type CustomTupel<T = string> = [number, string, T]; //T укажем в момент использования - стр. 95

  const arrayMix: CustomTupel<boolean> = [23, "Bob", true];
  const arrayMix2: CustomTupel<number> = [23, "Bob", 23];
  //т.к. по умолчанию стоит string (<T = string>) и мы не указали ничего в <>,
  // 3-й элемент (т.к. это Кортеж) должен быть string
  const arrayMix3: CustomTupel = [23, "Bob", "23"];

  //------Generic & Interface
  interface Fruit<T = number> {
    title: string;
    address: T;
  }
  //используем со значением по умолчанию
  const fruit1: Fruit = {
    title: "Apple",
    address: 12347,
  };
  //подставляем свое значение вместо T
  const fruit2: Fruit<string> = {
    title: "Apple",
    address: "Berlin, 12347",
  };

  //----Привер использования union ограничения переменной по значениям
  type Status = "success" | "error" | "loading";
  const status: Status = "error";
  //   const api: Status = 'default'; - ошибка: значения 'default' нет в union-ограничениях типа Status

  ////////////////////////////////////////////////////////////////////////////////////////////////

  //----Числовое перечисление
  enum Colors {
    Red,
    Black,
    Green = 1,
  }
  let currentColor: Colors = Colors.Black;
  console.log(currentColor);

  //------строковое перечисление
  // enum для цветов светофора
  enum TRAFFIC_LITE {
    RED,
    YELLOW,
    GREEN,
  }

  //ЗАДАЧА:
  // в зависимоси от того, что будет передано в функцию,
  // мы должны получить сообщение с определение значения цвета в светофоре
  const getAction = (light: TRAFFIC_LITE): string => {
    switch (light) {
      case TRAFFIC_LITE.RED:
        return "Stop";
      case TRAFFIC_LITE.YELLOW:
        return "Prepare to go";
      case TRAFFIC_LITE.GREEN:
        return "Let go!";
    }
  };

  //вызывать значение хранилища enum нужно только обращаясь к имени enum
  console.log(getAction(TRAFFIC_LITE.RED));

  //-----Mixed enum (strings and numbers)
  enum RESULT {   
    YES = "yes",
    NO = 0      
}
  
  const result: RESULT = RESULT.YES;
  console.log(result);
  
  return (
    <div className="lesson07-container">
      <div>TS-lesson 6</div>
    </div>
  );
}

export default Lesson07;
