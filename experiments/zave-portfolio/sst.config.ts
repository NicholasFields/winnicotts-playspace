import { SSTConfig } from "sst";
import { Default } from "./stacks/Default";
import { Dns } from "./stacks/Dns";

export default {
  config(_input) {
    return {
      name: "standard-nextjs",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Dns);
    app.stack(Default)
  },
} satisfies SSTConfig;
