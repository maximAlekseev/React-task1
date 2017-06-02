import React from 'react';

class Menu extends React.Component {
    constructor(){
        super();
        this.state = ({
            currentActive: 'localization'
        })
    }

    handleClick(e){
        this.setState({
            currentActive: e.currentTarget.id
        })
        this.props.menuClick(e.currentTarget.id)
    }

    render(){
        return (
            <aside id='menu'>
                <ul className="nav nav-pills nav-stacked">
                    <li id='localization' onClick={this.handleClick.bind(this)} className={this.state.currentActive === 'localization' ? 'active' : ''}><a href="#">Localization</a></li>
                    <li id='mailtemplate' onClick={this.handleClick.bind(this)} className={this.state.currentActive === 'mailtemplate' ? 'active' : ''}><a href="#">Mail templates</a></li>
                    <li id='wishlist' onClick={this.handleClick.bind(this)} className={this.state.currentActive === 'wishlist' ? 'active' : ''}><a href="#">Wishlist</a></li>
                </ul>
            </aside>
        )
    }
}

export default Menu;