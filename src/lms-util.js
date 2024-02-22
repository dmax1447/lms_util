// Anything exported from this file is importable by other in-browser modules.
import { setPublicPath } from "systemjs-webpack-interop";

setPublicPath("@lms/util");

export function publicApiFunction() {
  // console.log("publicApiFunction");
}
