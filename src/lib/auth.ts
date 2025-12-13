import betterAuth from "better-auth";

export const auth = betterAuth({
  appName: "Nike Ecommerce",
  database: {
    type: "postgresql",
    url: process.env.DATABASE_URL || "",
  },
  providers: [],
});
