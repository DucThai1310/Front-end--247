var listName = {
    names : [],
    sortNames: function() {
        while (true) {
            const name = prompt("Enter a name (or 'done' to finish):");
            if (name.toLowerCase() === "done") {
                break;
            }
            this.names.push(name);
        }
        this.names.sort();
        console.log("names:");
        for (let i = 0; i < this.names.length; i++) {
            console.log(this.names[i]);
        }
    }
}