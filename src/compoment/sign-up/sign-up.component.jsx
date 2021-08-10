import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            'displayName': '',
            'email': '',
            'password': '',
            'confirmPassword':'',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Your Password does not matching')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

             await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
        }
        catch (error) {
            console.log('error in SignUp', error.message);
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <form onSubmit={this.handleSubmit}>
                <FormInput
            name='displayName'
            type='text'
            handleChange={this.handleChange}
            value={this.state.displayName}
            label='name'
            required
                />
                  <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
                />
                
          <FormInput
            name='confirmPassword'
            type='Password'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
                />
                
                    <CustomButton type='submit'> Sign Up </CustomButton>
                    </form>
            </div>
        );
    }
}

export default SignUp;