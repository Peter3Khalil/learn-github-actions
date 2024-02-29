fetch("http://localhost:4001/user").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
});

fetch("http://localhost:4001/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
}).then((response) => response.json()).then((data) => {
    console.log(data);
});