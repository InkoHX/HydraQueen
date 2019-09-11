import { Message, Client } from 'discord.js'

export interface CommandOptions {
  name: string
  tag: string[]
}

export default abstract class BaseCommand {
  client: Client;
  name: string;
  tag: string[];

  /**
   * BaseCommand
   * @param client Discord Client
   * @param options Command Options
   */
  constructor (client: Client, options: CommandOptions) {
    this.client = client

    this.name = options.name
    this.tag = options.tag
  }

  public abstract async execute (): Promise<Message>
}
