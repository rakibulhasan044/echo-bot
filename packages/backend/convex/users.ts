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
    const identity = await cxt.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    const userId = await cxt.db.insert("users", {
      name: "Rakib",
    });
    return userId;
  },
});
