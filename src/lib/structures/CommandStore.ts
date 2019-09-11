import { Collection } from 'discord.js'
import BaseCommand from './base/BaseCommand'

export default class CommandStore extends Collection<string, BaseCommand> {
  public add (command: BaseCommand): this {
    this.set(command.name, command)

    return this
  }
}
