class Student {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Setter
    set name(value) {
        this._name = value;
    }

    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Invalid Age");
        }
    }

    // Getter
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

// Object Creation
const student = new Student("Ayush", 20);

// Update values using setter
student.name = "Rahul";
student.age = 21;

// Display values using getter
console.log("Name:", student.name);
console.log("Age:", student.age);