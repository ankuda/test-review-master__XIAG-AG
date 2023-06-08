import { FC } from 'react';

import AppHeader from '../AppHeader';
import MainApp from '../MainApp';
import AppFooter from '../AppFooter';

import './App.css';

const App: FC = () => (
  <div className='App main'>
    <AppHeader />

    <MainApp />

    <AppFooter />
  </div>
);

export default App;
