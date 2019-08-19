import { Collection } from 'discord.js'
import Command from './Command'

export default class CommandStore {
  public store: Collection<string, Command>;

  constructor () {
    this.store = new Collection()
  }

  public register (command: Command): void {
    this.store.set(command.name, command)
  }

  public registerAll (commands: Command[]): void {
    for (const command of commands) {
      this.store.set(command.name, command)
    }
  }

  public getCommand (name: string): Command | undefined {
    return this.store.get(name)
  }

  public getCommands (): Command[] {
    return this.store.array()
  }

  public clear (): void {
    this.store.clear()
  }
}
