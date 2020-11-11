import React from 'react';

class UsernameForm extends React.Component{
    render(){
        return (
            <div class="measure">
                <label for="name" className="f6 b db mb2">Username:</label>
                <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Submit</a>
            </div>
        )
    }
}

export default UsernameForm;