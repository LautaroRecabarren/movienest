class AuthService {
    private readonly dummyEmail = 'user';
    private readonly dummyPassword = '231';

    login(email: string, password: string) {
      if (email === this.dummyEmail && password === this.dummyPassword) {
        if (process.browser) {
          localStorage.setItem('loggedIn', 'true');
        }
        return true;
      } else {
        return false;
      }
    }

    logout() {
        if (process.browser) {
            localStorage.removeItem('loggedIn');
        }
    }

    isLoggedIn() {
        if (process.browser) {
            return localStorage.getItem('loggedIn') === 'true';
        }
        return false;
    }
}

export default new AuthService();