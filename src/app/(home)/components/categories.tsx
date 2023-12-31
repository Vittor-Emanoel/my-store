import { prismaClient } from "@/lib/prisma";
import { CategoryItem } from "./category-item";

export async function Categories() {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
}
