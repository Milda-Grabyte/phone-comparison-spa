export class cartItemDTO {
  constructor(data) {
    data instanceof Object
      ? (this.item = {
        id: data.productId,
        colorCode: data.color,
        storageCode: data.storage
        })
      : (this.item = 'Error adding item to cart');
  }
}
