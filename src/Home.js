import React from 'react';
import { CharacterProvider} from './CharacterContext';
import CharacterList from './Components/CharacterList';
import Search from './Components/Search';
import Logo from './Logo';
import { SearchProvider } from './SearchContext';

const Home = () => {
    return (
        <>
            <SearchProvider>
                <CharacterProvider>
                    <Logo />
                    <Search />
                    <CharacterList />
                </CharacterProvider>
            </SearchProvider>
        </>
    )
}

export default Home
