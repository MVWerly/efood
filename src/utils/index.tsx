export function capitalizeFirstLetter(string: string | boolean) {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
