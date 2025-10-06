export default function CategorySection() {
  const categories = [
    {
      title: "Icone",
      items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    },
    {
      title: "Shoes",
      items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      title: "Clothing",
      items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
    },
    {
      title: "Kids",
      items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="space-y-3 md:space-y-4">
              <h1 className="font-semibold text-base md:text-lg">{category.title}</h1>
              <ul className="text-gray500 space-y-2 text-sm md:text-base">
                {category.items.map((item, idx) => (
                  <li className="hover:underline cursor-pointer hover:text-foreground transition-colors" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
