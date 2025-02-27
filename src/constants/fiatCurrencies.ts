/**
 * @typedef {Object} Currency
 * @property {string} symbol - Símbolo de la moneda
 * @property {string} name - Nombre de la moneda
 * @property {any} image - Imagen de la moneda
 * @property {string} prefix - Prefijo de la moneda
 * @property {"before" | "after"} prefixPosition - Posición del prefijo
 */

const fiatCurrencies = [
  {
    symbol: 'EUR',
    name: 'Euro',
    image: require('../assets/images/EUR.png'),
    prefix: '€',
    prefixPosition: 'after',
  },
  {
    symbol: 'USD',
    name: 'Dólar Estadounidense',
    image: require('../assets/images/USD.png'),
    prefix: '$',
    prefixPosition: 'before',
  },
  {
    symbol: 'GBP',
    name: 'Libra Esterlina',
    image: require('../assets/images/GBP.png'),
    prefix: '£',
    prefixPosition: 'before',
  },
];

export default fiatCurrencies;
