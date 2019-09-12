import { Message } from 'discord.js'
import HydraClient from '../../HydraClient';

export interface CommandOptions {
  name: string
  tag: string[]
}

export default abstract class BaseCommand {
  client: HydraClient;
  name: string;
  tag: string[];

  /**
   * BaseCommand
   * @param client Discord Client
   * @param options Command Options
   */
  constructor (client: HydraClient, options: CommandOptions) {
    this.client = client
    this.name = options.name
    this.tag = options.tag
  }

  public abstract async execute (): Promise<Message>
}
