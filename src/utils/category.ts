const categoryLabels: Record<string, string> = {
  beauty: 'Belleza',
  fragrances: 'Fragancias',
  furniture: 'Muebles',
  groceries: 'Despensa',
  'home-decoration': 'Decoración del hogar',
  'kitchen-accessories': 'Accesorios de cocina',
  laptops: 'Computadores',
  'mens-shirts': 'Camisas de hombre',
  'mens-shoes': 'Zapatos de hombre',
  'mens-watches': 'Relojes de hombre',
  'mobile-accessories': 'Accesorios móviles',
  motorcycle: 'Motocicletas',
  'skin-care': 'Cuidado de la piel',
  smartphones: 'Smartphones',
  'sports-accessories': 'Accesorios deportivos',
  sunglasses: 'Lentes de sol',
  tablets: 'Tablets',
  tops: 'Vestuario',
  vehicle: 'Vehículos',
  'womens-bags': 'Carteras',
  'womens-dresses': 'Vestidos',
  'womens-jewellery': 'Joyería',
  'womens-shoes': 'Zapatos de mujer',
  'womens-watches': 'Relojes de mujer',
}

export function getCategoryLabel(category: string) {
  return categoryLabels[category] ?? category.replaceAll('-', ' ')
}
