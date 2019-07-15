import { Collection } from "discord.js";
import Command from "./Command";

export default class CommandMap {
  private commands: Collection<string, Command>;

  constructor() {
    this.commands = new Collection();
  }

  public register(command: Command): void {
    this.commands.set(command.name, command);
  }

  public registerAll(commands: Command[]): void {
    for (const command of commands) {
      this.commands.set(command.name, command);
    }
  }

  public clearAll(): void {
    this.commands.clear();
  }

  public getCommand(name: string): Command | undefined {
    return this.commands.get(name);
  }
}
