import { Message } from "discord.js";
import { HydraQueen } from "..";

export default (message: Message, client: HydraQueen): void => {
  if (message.author.bot || message.system) return;
  if (message.webhookID) return;
  if (message.author.id === message.client.user.id) return;

  const prefix = "hq!";
  if (message.content.startsWith(prefix)) {
    const args = message.content.replace(prefix, "").split(" ");
    const command = client.commands.getCommand(args[0]);

    try {
      if (typeof command === "undefined") message.reply("存在しないコマンドです。");
      else command.execute(message);
    } catch (error) {
      client.emit("error", error);
    }
  }
};
