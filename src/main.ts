import { App } from "./app.js"
import { UserInput } from "./user-input.js";
import { ProjectList } from "./project-list.js";

const app = new App();
const userInput = new UserInput(app);
const activeList = new ProjectList(app);
