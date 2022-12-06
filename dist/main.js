//? Modules
const server = require("./app");
//? Datas
const PORT = process.env.PORT || 8000;
//? To connect to the server
server.listen(PORT, () => console.log(`Server running at ${PORT}`));
