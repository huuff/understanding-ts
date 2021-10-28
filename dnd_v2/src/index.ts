import { Form } from "./form";
import { ProjectList } from "./project-list";
import { App } from "./app";

console.log("Started Project Manager")

const app = new App();
const form = new Form(app);
const activeProjects = new ProjectList(app, "activeProjects");
