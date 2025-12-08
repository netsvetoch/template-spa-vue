import "dotenv/config";
import { defaultPlugins } from "@hey-api/openapi-ts";

export default {
	input: `${process.env.VITE_API_URL}/docs/json`,
	output: "src/shared/api/autogen",
	plugins: [...defaultPlugins, "@tanstack/vue-query"],
};
