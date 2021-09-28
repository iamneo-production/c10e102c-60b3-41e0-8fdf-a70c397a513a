class Auth{
    constructor(){
        this.authenticated = false;
        this.authenticatedAdmin = false;
    }

    loginUser(cb){
        this.authenticated = true;
        cb();
    }

    loginAdmin(cb){
        this.authenticatedAdmin = true;
        cb();
    }

    logoutUser(cb){
        this.authenticated = false;
        cb();
    }

    logoutAdmin(cb){
        this.authenticatedAdmin = false;
        cb();
    }

    isAuthenticatedUser(){
        return this.authenticated;
    }

    isAuthenticatedAdmin(){
        return this.authenticatedAdmin;
    }

}

export default new Auth();