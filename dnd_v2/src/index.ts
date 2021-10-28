import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "./form";
import { App } from "./app";

console.log("Started Project Manager")

const app = new App();
const form = new Form(app);
