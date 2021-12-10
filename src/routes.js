import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MinhaLista from './pages/Saved_playlists';
import Main from './pages/Home';
import Header from './components/Header';

export default function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />}></Route>
                <Route exact path="/saved_playlists" element={<MinhaLista />}></Route>
            </Routes>
        </BrowserRouter>
    );
}