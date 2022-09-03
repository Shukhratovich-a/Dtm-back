import { Router } from "express";

import admins from "./admin/router.js";
import users from "./user/router.js";
import regions from "./region/router.js";
import sciences from "./science/router.js";
import directions from "./directions/router.js";

export default <Router[]>[admins, users, regions, sciences, directions];
