interface CategoryOption {
  value: string
  label: string
  count: number
}

interface CategoryFilterProps {
  categories: CategoryOption[]
  value: string
  totalCount: number
  onChange: (category: string) => void
}

function CategoryFilter({ categories, value, totalCount, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">Explorar por categoría</label>
      <select
        id="category-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">Todas las categorías ({totalCount})</option>
        {categories.map(({ value: category, label, count }) => (
          <option key={category} value={category}>
            {label} ({count})
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryFilter
