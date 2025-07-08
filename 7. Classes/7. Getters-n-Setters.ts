class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}

// Create an instance of MyClass
const myInstance = new MyClass();

// Use the getter
console.log("Current value:", myInstance.myProperty);

// Use the setter
myInstance.myProperty = 42;
console.log("New value:", myInstance.myProperty);