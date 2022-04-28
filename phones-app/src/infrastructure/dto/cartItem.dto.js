export class cartItemDTO {
  constructor(data) {
    data instanceof Object
      ? (this.item = {
        id: data.id,
        colorCode: data.colorCode,
        storageCode: data.storageCode
        })
      : (this.item = 'Error adding item to cart');
  }
}
