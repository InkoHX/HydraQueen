import { Client, ClientOptions } from "discord.js";
import CommandMap from "./command/CommandMap";

class HydraQueen extends Client {
  public commandMap: CommandMap;

  constructor(options?: ClientOptions) {
    super(options);

    this.commandMap = new CommandMap();
  }
}

export default HydraQueen;
