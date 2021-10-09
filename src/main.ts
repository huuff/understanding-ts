import { App } from "./app.js"
import { UserInput } from "./user-input.js";
import { ProjectList } from "./project-list.js";

const app = new App();
app.addComponent(new UserInput(app));
app.addComponent(new ProjectList(app, "Active"));
app.addComponent(new ProjectList(app, "Finished"));
