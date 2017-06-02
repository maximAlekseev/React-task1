import React from 'react';
import Localization from './Localization';
import MailTemplate from './MailTemplate';
import Wishlist from './Wishlist';

class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            object: []
        }
    }
    componentWillMount(){
        fetch('http://goldenguy-001-site2.dtempurl.com/api/wishlist')  
            .then(  
                response => {  
                    if (response.status !== 200) {  
                        console.log('Error! Status code is ' + response.status);  
                        return;  
                    }

                    response.json().then(data => {  
                        this.setState({
                            object: data
                        }) 
                    });  
                }
            )
    }
    render(){
            return (
                <main id='content'>
                    {this.props.activePart === 'localization' ? <Localization /> : null}
                    {this.props.activePart === 'mailtemplate' ? <MailTemplate /> : null}
                    {this.props.activePart === 'wishlist' ? <Wishlist data={this.state.object}/> : null}
                </main>
            )
    }
}

export default Content;