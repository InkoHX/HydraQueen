import moment from 'moment'
import chalk from 'chalk'

export default class HydraLogger {
  public readonly timestamp: string;

  constructor () {
    this.timestamp = `[${moment().format('YYYY/MM/DD | HH:mm:ss')}]`
  }

  public info (message: any): void {
    console.log(`${chalk.bgCyan(this.timestamp)} ${chalk.white(String(message))}`)
  }

  public warn (message: any): void {
    console.log(`${chalk.bgYellow(this.timestamp)} ${chalk.yellow(String(message))}`)
  }

  public error (message: any): void {
    console.log(`${chalk.bgRed(this.timestamp)} ${chalk.bold.red(String(message))}`)
  }

  public debug (message: any): void {
    console.log(`${chalk.bgMagenta(this.timestamp)} ${chalk.gray(String(message))}`)
  }
}
