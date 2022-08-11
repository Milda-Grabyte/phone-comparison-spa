

# Phone store SPA

Es una aplicación SPA que consume un api para obtener los datos de diferentes modelos de teléfonos móviles y los presenta en un listado filtrable en cuanto a la marca y el modelo. Al seleccionar un artículo éste se visualiza en una página con una imagen grande, sus especificaciones, opciones de color y capacidad de memoria. Hay un botón para añadirlo al carrito y se puede ver el total de artículos seleccionados. Se puede volver a la página principal pulsando el logo de la applicación, el botón de retorno o en breadcrumbs. Los datos obtenidos de la base de datos se persisten durante una hora.

## Ejecución y manejo del proyecto

En el directorio del proyecto, ejecute

### `npm start`

Abra [http://localhost:3000](http://localhost:3000) para ver la página en su navegador.

Comando para correr los tests:

### `npm test`

Para obtener la cobertura de los tests:

### `npm run coverage`

Para preparar el proyecto para el despliegue, ejecute

### `npm run build`

Para revisar los errores del código (linter):

### `npm run lint`

Para corregir los errores no críticos:

### `npm run lint:fix`
