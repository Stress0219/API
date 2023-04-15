import { Bug } from "./bug.js";
import { User } from "./user.js";
import { Project } from "./project.js";

Bug.belongsTo(User);
Bug.belongsTo(Project);
User.hasMany(Bug);
Project.hasMany(Bug);
