import { Provider } from 'react-redux';
import './App.css';
import Game from './components/Game';
import { SpriteAnimator } from 'react-sprite-animator';
import BestPlayers from './components/BestPlayers';
import GameDisplay from './components/GameDisplay';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeforePlay from './components/BeforePlay';

import InterfaceStore from './shared/InterfaceStore';
function App({store}) {
  return (
    
    <>
    {/*<Provider store={store}>
    <Game/>
    </Provider>*/ }
    <div>
    <BrowserRouter>
    <InterfaceStore>
  
                <Switch>
                  <Route exact path="/" component={BeforePlay}/>
                  <Route exact path="/game" render={(props) => <GameDisplay store={store} {...props} />} />
                </Switch>
    </InterfaceStore>

                </BrowserRouter>
        
                </div>
    
</>
  );
}

export default App;
