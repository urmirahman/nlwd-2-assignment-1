function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

interface iRating {
  title: string;
  rating: number;
}

function filterByRating(items: iRating[]): iRating[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

const processValue = (value: string | number): number =>
  typeof value === "string" ? value.length : value * 2;
