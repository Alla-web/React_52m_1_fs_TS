import "./styles.css";

function Selflearning07() {
  //----Задание 1
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
  }

  const adminUser: User = {
    id: 123456,
    name: "Alla",
    email: "test@gmail.com",
    // isAdmin: false, // не обязательное поле
  };

  //----Задание 2
  enum ROLE {
    ADMIN,
    USER,
    GUEST,
  }

  const getRoleName = (role: ROLE): string => {
    switch (role) {
      case ROLE.ADMIN:
        return "This is the Admin";

      case ROLE.GUEST:
        return "This is a guest";

      case ROLE.USER:
        return "This is the User";
    }
  };

  console.log(getRoleName(ROLE.ADMIN));
  console.log(getRoleName(ROLE.GUEST));
  console.log(getRoleName(ROLE.USER));

  //----Task 3
  type PaymentStatus = "Pending" | "Completed" | "Failed";

  function printingPaymentStatus(status: PaymentStatus): void {
    switch (status) {
      case "Pending":
        return console.log(`Status is ${status}`);
      case "Completed":
        return console.log(`Status is ${status}`);
      case "Failed":
        return console.log(`Status is ${status}`);
    }
  }

  printingPaymentStatus("Pending");
  printingPaymentStatus("Completed");
  printingPaymentStatus("Failed");

  //Task 4
  type Action = "add" | "substract" | "divide" | "multiple";
  const calculate = (a: number, b: number, action: Action): number => {
    let result;
    switch (action) {
      case "add":
        return (result = a + b);
      case "substract":
        return (result = a - b);
      case "divide":
        return (result = a / b);
      case "multiple":
        return (result = a * b);
    }
  };

  console.log(calculate(4, 5, "add"));
  console.log(calculate(5, 5, "divide"));

  //Task 5
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  const products: Product[] = [
    { id: 1, name: "bread", price: 1.5 },
    { id: 2, name: "meat", price: 9.7 },
    { id: 3, name: "cucamber", price: 2.1 },
  ];

  const extractNameFromProduct = (products: Product[]): string[] => {
    const productsNames = products.map(
      (product: Product): string => product.name
    );
    return productsNames;
  };
  console.log(extractNameFromProduct(products));

  const extracktIdFromProduct = (products: Product[]): number[] => {
    const productsId = products.map((product: Product): number => product.id);
    return productsId;
  };
  console.log(extracktIdFromProduct(products));

  const extractPriceFromProduct = (products: Product[]): number[] => {
    const productsPrices = products.map(
      (product: Product): number => product.price
    );
    return productsPrices;
  };
  console.log(extractPriceFromProduct(products));

  //Task 5
  /*
    Создай функцию formatValue<T>(value: T): string, которая:
    - если тип T — это строка, возвращает значение в верхнем регистре.
    - если тип T — это число, возвращает строку с числом, умноженным на 2.
    В остальных случаях возвращает строку "Unsupported type".
    */

  function formatValue<T extends string | number>(value: T): string {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (typeof value === "number") {
      //   return (value * 2).toString();
      return `multiple: ${value * 2}`;
    } else {
      return "Unsupported type";
    }
  }
  console.log(formatValue<string>("hallo"));
  console.log(formatValue<number>(3));
//   console.log(formatValue<boolean>(true));

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="lesson07-container">
      <div>Selflearning07</div>
    </div>
  );
}

export default Selflearning07;
