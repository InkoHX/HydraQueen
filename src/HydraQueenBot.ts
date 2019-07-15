import dotenv from "dotenv";
import PingCommand from "./commands/PingCommand";
import commandHandler from "./lib/command/CommandHandler";
import { HydraQueen } from "./lib/index";
dotenv.config();

const client = new HydraQueen();

client.commands.registerAll([
  new PingCommand("ping"),
]);

client.on("message", (message) => commandHandler(message, client));

client.login(process.env.HYDRA_QUEEN_TOKEN);
