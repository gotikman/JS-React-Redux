import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        showRandomChar: true
    }

    toggleRandomChar = () => {
        this.setState(({ showRandomChar }) => {
            console.log('click');
            return {
                showRandomChar: !showRandomChar
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    {this.state.showRandomChar ? <RandomChar /> : null}

                    <button onClick={this.toggleRandomChar}>click</button>
                    <div className="char__content">
                        <CharList />
                        <CharInfo />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

// const App = () => {
//     return (
//         <div className="app">
//             <AppHeader />
//             <main>
//                 <RandomChar />
//                 <div className="char__content">
//                     <CharList />
//                     <CharInfo />
//                 </div>
//                 <img className="bg-decoration" src={decoration} alt="vision" />
//             </main>
//         </div>
//     )
// }

export default App;