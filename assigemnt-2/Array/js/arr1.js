var arrList = {
    array: [1, 3, 5, 7, 9, 11, 13, 15, 18, 20],

    menu1: function () {
        let choice;
        do {
            choice = parseInt(prompt("Menu:\n1 - Print Array\n2 - Search a Member\n3 - Find Maximum Number\n4 - Calculate Sum\n5 - Sort in Descending Order\n0 - Exit"));
            switch (choice) {
                case 1:
                    arrList.printArray();
                    break;
                case 2:
                    arrList.searchValue();
                    break;
                case 3:
                    arrList.findMax();
                    break;
                case 4:
                    arrList.calculateSum();
                    break;
                case 5:
                    arrList.sortDescending();
                    break;
                case 0:
                    console.log("Exiting...");
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        } while (choice !== 0);
    },



    printArray: function () {
        console.log("Array elements:");
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    },

    searchValue: function () {
        let value = parseInt(prompt("Enter a value to search in the array:"));
        if (this.array.includes(value)) {
            console.log(value + " exists in the array.");
        } else {
            console.log(value + " does not exist in the array.");
        }
    },

    findMax: function () {
        let max = this.array[0];
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] > max) {
                max = this.array[i];
            }
        }
        console.log("Maximum value in the array: " + max);
    },

    calculateSum: function () {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        console.log("Sum of array elements: " + sum);
    },

    sortDescending: function () {
        this.array.sort(function (a, b) {
            return b - a;
        });
        console.log("Array sorted in descending order: " + this.array);
    }
};