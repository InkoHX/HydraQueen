import { Message } from "discord.js";

export default abstract class Command {
  public alias: null | string[];
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.alias = null;
  }

  public abstract execute(message: Message): void;
}
