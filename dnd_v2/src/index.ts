import { Form } from "./form";
import { State } from "./state";

console.log("Started Project Manager")

const state = new State();
const form = new Form(state, "userInput");
