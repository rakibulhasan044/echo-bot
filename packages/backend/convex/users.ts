import { query, mutation } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (cxt) => {
    const userId = await cxt.db.insert("users", {
      name: "Rakib",
    });
    return userId;
  },
});
