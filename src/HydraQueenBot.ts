import dotenv from 'dotenv'
import PingCommand from './commands/PingCommand'
import { HydraQueen } from './lib/index'
import CommandHandler from './event/CommandHandler'
dotenv.config()

const client = new HydraQueen()

client.commands.registerAll([
  new PingCommand('ping')
])

client.events.registerAll([
  new CommandHandler(client, { eventName: 'message' })
])

client.logger.log('init')

client.login(process.env.HYDRA_QUEEN_TOKEN)
