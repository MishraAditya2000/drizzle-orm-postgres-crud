import { db } from "../../db/connection";

export const createUser = async (data:object) => {
  const result = await db.insert("users").values(data).returning();
  return result;
};
