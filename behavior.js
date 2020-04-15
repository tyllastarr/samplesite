function sayHello() {
    var box = document.getElementById("yourname");
    var name = box.value;
    document.getElementById("hello").innerHTML = `Hello ${name}!`;
}