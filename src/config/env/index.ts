import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  VERCEL_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DEBUG: z.boolean().default(false),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Error parsing environment variables:", _env.error.errors);

  throw new Error("Error parsing environment variables.");
}

export const env = _env.data;
