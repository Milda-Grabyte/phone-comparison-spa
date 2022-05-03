import { helpers } from '../helpers/helpers';

const Description = ({ item }) => {
  const layout =
    Object.entries(item).map(([key, value]) => {

      const mapValues =
        Array.isArray(value)
        ? value.map(option => <p>{option}</p>)
        : value;

      if (key !== 'image' && key !== 'options') {
        return (
          <div key={key}>
            <h3>{helpers.capitalizeWord(key, ['cpu', 'ram', 'os'])}:</h3>
            <p>{mapValues}</p>
          </div>
        );
      }
    });
    console.log(layout);
  return layout;
};

export default Description;