import admins from "./admin/router.js";
import users from "./user/router.js";
import regions from "./region/router.js";
import sciences from "./science/router.js";
import tests from "./test/router.js";
import variants from "./variant/router.js";
import direction from "./direction/router.js";
import quotas from "./quota/router.js";
import exams from "./exam/router.js";
export default [
    admins,
    users,
    regions,
    sciences,
    tests,
    variants,
    direction,
    quotas,
    exams,
];
