export class ItemDTO {
  constructor(data) {
    data instanceof Object
      ? this.item = {
          image: data.imgUrl,
          brand: data.brand,
          model: data.model,
          price: data.price,
          cpu: data.cpu,
          ram: data.ram,
          os: data.os,
          resolution: data.displayResolution,
          battery: data.battery,
          cameras: [data.primaryCamera, data.secondaryCmera], // both arrays
          dimentions: data.dimentions,
          weight: data.weight,
          colors: data.colors, // array
        }
      : this.item = 'Item detail not found';
  }
}
