import { App } from "./app"
import { UserInput } from "./user-input";
import { ProjectList } from "./project-list";

const app = new App();
app.addComponent(new UserInput(app));
app.addComponent(new ProjectList(app, "Active"));
app.addComponent(new ProjectList(app, "Finished"));
