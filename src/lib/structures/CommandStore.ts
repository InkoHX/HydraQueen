import { Collection } from 'discord.js'
import Command from './Command'

export default class CommandStore extends Collection<string, Command> {
  public add (command: Command): this {
    this.set(command.name, command)

    return this
  }
}
