import React from 'react';

class Wishlist extends React.Component {
    render(){
        let obj = this.props.data
        return (
            <div>
                <h2>Wishlist</h2>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {obj.map(data => {
                        return (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.id}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
                
        )
    }
}

export default Wishlist;