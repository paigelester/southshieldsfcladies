import * as React from 'react';
import { Redirect } from 'react-router-dom';

import AdminService from '../../../services/admin';

type AdminLoginState = {
    username: string;
    password: string;
    error: null;
    redirect: boolean;
};

export default class AdminLogin extends React.Component<{}, AdminLoginState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: null,
            redirect: false
        };
    }

    private testAuth(): void {
        AdminService.adminLogin(this.state.username,this.state.password ).then((response: any) => {
            if (!response.auth) {
                this.setState({ error: response.message });
            } else {
                this.setState({ redirect: true, error: null });
                localStorage.setItem('ssfcl_admin_login', 'true');
            }
        }, (err: any) => {
            this.setState({ error: err.message });
            console.error(err.message);
        });
    }

    private handleUsernameChange(username: string): void {
        this.setState({ username: username });
    }

    private handlePasswordChange(password: string): void {
        this.setState({ password: password });
    }

    private isAlreadyLoggedIn(): boolean {
        if (localStorage.getItem('ssfcl_admin_login') != null) {
            return true;
        }

        return false;
    }

    public render(): JSX.Element {
        if (this.isAlreadyLoggedIn() || this.state.redirect) {
            return <Redirect to='admin-home' />;
        }

        return (
            <div id='admin-login'>
                
            </div>
        );
    }
}