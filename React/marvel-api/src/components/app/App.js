import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';



class App extends Component {

    state = {
        selectedChar: null,          //! стейт для підйому id

    }

    onCharSelected = (id) => {         //! підйом id вибраного перса з CharList
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected} />
                        <CharInfo charId={this.state.selectedChar} />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}



//! кнопка з вкл/викл компонента
// class App extends Component {
//     state = {
//         showRandomChar: true
//     }

//     toggleRandomChar = () => {
//         this.setState(({ showRandomChar }) => {
//             return {
//                 showRandomChar: !showRandomChar
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="app">
//                 <AppHeader />
//                 <main>
//                     {this.state.showRandomChar ? <RandomChar /> : null}

//                     <button onClick={this.toggleRandomChar}>click</button>
//                     <div className="char__content">
//                         <CharList />
//                         <CharInfo />
//                     </div>
//                     <img className="bg-decoration" src={decoration} alt="vision" />
//                 </main>
//             </div>
//         )
//     }
// }

export default App;