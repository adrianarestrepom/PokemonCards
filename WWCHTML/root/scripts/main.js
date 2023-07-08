const userName = window.prompt("What is you name?")

if(!userName) {
    console.log("Cancelado");
} else if (userName !== "Admin") {
    console.log("No te conozco");
} 

