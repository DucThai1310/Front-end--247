var arrList = {
    array: [],
    menu1: function () {
        const n = parseInt(prompt("Enter the number of rows (n):"));
        const m = parseInt(prompt("Enter the number of columns (m):"));
        for (let i = 0; i < n; i++) {
            this.array.push(new Array(m));
        }

        let choice;
        while (true) {
            choice = parseInt(prompt(
                "Menu:\n" +
                "1. Enter values for array elements\n" +
                "2. Print array elements\n" +
                "3. Calculate the total of array elements\n" +
                "4. Check the existence of a number in the array\n" +
                "5. Sort the array in ascending order\n" +
                "6. Exit\n" +
                "Enter your choice:"
            ));

            switch (choice) {
                case 1:
                    this.enterValues();
                    break;
                case 2:
                    this.printElements();
                    break;
                case 3:
                    this.calculateTotal();
                    break;
                case 4:
                    this.checkExistence();
                    break;
                case 5:
                    this.sortArray();
                    break;
                case 6:
                    return;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    },


    enterValues: function () {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                this.array[i][j] = parseInt(prompt(`Enter the value for element at index (${i},${j}):`));
            }
        }
    },

    printElements: function () {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                console.log(`Element at index (${i},${j}): ${this.array[i][j]}`);
            }
        }
    },

    calculateTotal: function () {
        let total = 0;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                total += this.array[i][j];
            }
        }
        console.log(`Total of all elements: ${total}`);
    },

    checkExistence: function () {
        const number = parseInt(prompt("Enter a number to check its existence in the this.array:"));
        let found = false;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                if (this.array[i][j] === number) {
                    found = true;
                    break;
                }
            }
        }
        console.log(`Number ${number} ${found ? "exists" : "does not exist"} in the this.array.`);
    },

    sortArray: function () {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].sort((a, b) => a - b);
        }
        console.log("this.Array sorted in ascending order:");
        printElements();
    }

};