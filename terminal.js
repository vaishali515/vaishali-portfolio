const input = document.getElementById("command");
const output = document.getElementById("output");

const commands = {
help: "Commands: about, skills, projects, contact",

about: "Backend Engineer | Java | Distributed Systems",

skills: "Java, Spring Boot, Kafka, RabbitMQ, Docker, PostgreSQL, AWS",

projects: `
Switchboard
Event-driven microservices platform

Stack:
Java | Kafka | RabbitMQ | Docker
`,

contact: "Email: vaishalichauhan946@gmail.com"
};

input.addEventListener("keydown", function(e){

if(e.key === "Enter"){

let cmd = input.value;

output.innerHTML += `<div>> ${cmd}</div>`;

if(commands[cmd]){
output.innerHTML += `<div>${commands[cmd]}</div>`;
}else{
output.innerHTML += `<div>Command not found</div>`;
}

input.value = "";

}

});
