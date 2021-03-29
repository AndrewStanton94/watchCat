
const src = `
const sc = document.createElement('script');
sc.src = 'http://localhost:3000/bookmarklet.js';
document.querySelector('head').append(sc);
`;
export default src;
