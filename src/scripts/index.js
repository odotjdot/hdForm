import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('submit me');
});

document.querySelector('#reset').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('reset me');
});
