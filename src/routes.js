import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MinhaLista from './pages/Saved_playlists';
import Main from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/saved_playlists" component={MinhaLista}></Route>
            </Switch>
        </BrowserRouter>
    );
}