type Category = string | number;

export function categorizeData<T extends { category: Category }>(data: T[]) {
  const categorizedData: Record<Category, T[]> = {};

  data.forEach(item => {
    const { category } = item;

    if (!categorizedData[category]) categorizedData[category] = [];
    categorizedData[category].push(item);
  });

  return categorizedData;
}
