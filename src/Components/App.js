import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            activeOne: 'localization'
        }
    }

    menuClick(newActiveMuneItem){
        this.setState({
            activeOne: newActiveMuneItem
        })
    }

    render(){
        return (
        <div>
            <Header />
            <div className='row' id='wrap'>
                <Menu menuClick={this.menuClick.bind(this)} />
                <Content activePart={this.state.activeOne} />
            </div>
            <Footer />
        </div>
        )
    }
}

export default App;