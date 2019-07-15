import { HydraQueen } from "..";

export default abstract class Event {
  public name: string;
  public once: boolean;
  public client: HydraQueen;

  constructor(client: HydraQueen, name: string, once: boolean = false) {
    this.client = client;
    this.name = name;
    this.once = once;
  }

  public abstract async run(...args: unknown[]): Promise<void>;
}
