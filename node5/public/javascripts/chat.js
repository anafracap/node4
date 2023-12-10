const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const username = document.getElementById("username");

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        let msg = username.innerHTML + ": " + input.value;
        socket.emit("chat", msg);
        input.value = "";
    }
});
socket.on("chat", (msg) =>{
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0,document.body.scrollHeight);
});