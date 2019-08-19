import { Event } from '../lib'
import { Message } from 'discord.js'

export default class extends Event {
  eventName = 'message';

  public async run (message: Message) {
    message.reply('hi')
  }
}
