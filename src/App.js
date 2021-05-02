import * as ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mundle" animal="Dog" breed="Corgi" />
      <Pet name="Macy" animal="Cat" breed="Tabby" />
      <Pet name="Phoenix" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root') // where to stamp
);
