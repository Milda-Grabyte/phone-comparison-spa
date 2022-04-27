export class ProductListDTO {
  constructor(data) {
    Array.isArray(data) ? this.products = data.map(product => {
      return {
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        image: product.imgUrl,
      };
    }) : this.products = "Product list not found"
  }
}