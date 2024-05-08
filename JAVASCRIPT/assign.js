function checkAge(){
    const age = document.querySelector("#ageInput").value;
    const beverage = age > 18 ? "Beer" : "Milk";
    document.getElementById("result").innerHTML = `You are ${age} years old. You can have ${beverage}`;
}