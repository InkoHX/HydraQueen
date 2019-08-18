
import moment from 'moment'
import chalk from 'chalk'

export default class HydraLogger {
  public timestamp: string;

  constructor () {
    this.timestamp = `[${moment().format('YYYY:MM:DD | HH:mm:ss')}]`
  }

  public log (message: any): void {
    console.log(`${chalk.bgCyan(this.timestamp)} ${chalk.white(String(message))}`)
  }

  public error (message: any): void {
    console.error(`${chalk.bgRed(this.timestamp)} ${chalk.bold.red(String(message))}`)
  }
}
