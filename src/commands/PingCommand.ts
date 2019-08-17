import { Message } from 'discord.js'
import { Command } from '../lib'

export default class PingCommand extends Command {
  public execute (message: Message): void {
    message.reply('Pong')
  }
}
