import dotenv from "dotenv";
import { HydraQueen } from "./lib/index";

dotenv.config();

const client = new HydraQueen();

client.login(process.env.HYDRA_QUEEN_TOKEN);
