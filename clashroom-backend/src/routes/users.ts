import express from "express";
import { and, desc, eq, getTableColumns, ilike, or, sql } from "drizzle-orm";
import { user } from "../db/schema/index.js";
import { db } from "../db/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { search, role, page = 1, limit = 10 } = req.query;

    const currentPage = Math.max(1, parseInt(String(page), 10) || 1);
    const limitPerPage = Math.min(
      Math.max(1, parseInt(String(limit), 10) || 10),
      100,
    );

    const offset = (currentPage - 1) * limitPerPage;

    const filterConditions = [];

    // If search query exists, filter by user name OR user email via ilike
    if (search) {
      const searchPattern = `%${String(search)}%`;
      filterConditions.push(
        or(ilike(user.name, searchPattern), ilike(user.email, searchPattern)),
      );
    }

    // if role filter exists, exact match
    if (role) {
      // @ts-ignore - role query param might not be a valid roleEnum value, but Drizzle will handle it or fail gracefully
      filterConditions.push(eq(user.role, String(role)));
    }

    // Combine all filters using AND if any exist
    const whereClause =
      filterConditions.length > 0 ? and(...filterConditions) : undefined;

    const countResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(user)
      .where(whereClause);

    const totalCount = countResult[0]?.count ?? 0;

    const usersList = await db
      .select({
        ...getTableColumns(user),
      })
      .from(user)
      .where(whereClause)
      .orderBy(desc(user.createdAt))
      .limit(limitPerPage)
      .offset(offset);

    res.status(200).json({
      data: usersList,
      pagination: {
        page: currentPage,
        limit: limitPerPage,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limitPerPage),
      },
    });
  } catch (err) {
    console.error(`GET /users error: ${err}`);
    res.status(500).json({ error: "Failed to get users" });
  }
});

export default router;
