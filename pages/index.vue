<script setup>

</script>

<template>
    <div class="container">
        <HomeText class="home-text"></HomeText>
        <div class="login-container">
            <img class="logo" src="/img/logo.svg" alt="MovieNest Logo" />
            <h2>Login</h2>
            <TextInput v-model="email" placeholder="Email" />
            <PasswordInput v-model="password" placeholder="Password" />
            <PrimaryButton @click="login">Login Now</PrimaryButton>
            <div class="checkbox-container">
                <input
                type="checkbox"
                name="check"
                value="value"
                class="checkbox">
                <label class="checkbox-text">
                    Accept all the requirements that we have provided.
                </label>
            </div>
            <div class="lines">
                <div class="left-divider"></div>
                <span class="line-divider-text">Or continue with</span>
                <div class="right-divider"></div>
            </div>
            <div class="social-media">
                <button><img src="/img/google.png" alt="logo de google"></button>
                <button><img src="/img/apple.png" alt="logo de apple"></button>
                <button><img src="/img/twitter.png" alt="logo de twitter"></button>
            </div>
            <span class="sign-up">Don't have an account yet? <a href=""> Sign up </a></span>
        </div>
    </div>
</template>

<style scope>
.container > :first-child {
  display: none;
}

@media (min-width: 1199px) {
    .container {
        margin-top: 2% ;
    }
    .container > :first-child {
      display: block;
    }
}

@media (min-width: 1200px) {
    .container > :first-child {
      display: block;
      margin-right: 10%;
    }
}

@media (min-width: 1365px) {
    .container > :first-child {
      margin-right: 15%;
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    margin-bottom: 15%;
}

.login-container h2 {
    width: 8.4375rem;
    height: 1.75rem;
    margin-bottom: 6%;

    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
}

.checkbox-container {
    display: flex;
    align-items: center;
}

.checkbox {
    margin: 0;
    width: 1.3rem;
    height: 1.3rem;

    background-color: none;
    border-radius: 0.25rem;
    border: 1px solid #727272;
    appearance: none;
    backdrop-filter: blur(6.875rem);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
}

.checkbox-text [type="text"] {
  cursor: pointer;
}

.checkbox:checked:before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-image: url('/img/check.svg');
    background-size: cover;
    top: 30%;
    left: 60%;
    transform: translate(-50%, -50%);
}

.checkbox-text {
    width: 100%;

    color: #727272;
    font-family: Poppins;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-left: 1rem;
}

.lines {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.left-divider {
  border-top: 0.1px solid transparent;
  background-image: linear-gradient(to left, #E0E0E0, transparent);
  height: 0.05rem;
  width: 6rem;
  display: inline-block;
}

.right-divider {
  border-top: 0.1px solid transparent;
  background-image: linear-gradient(to right, #E0E0E0, transparent);
  height: 0.05rem;
  width: 6rem;
  display: inline-block;
}

.line-divider-text {

    margin: 2.5rem 1rem;

    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.social-media button {
    width: 5.5rem;
    height: 3rem;
    margin: 1rem;

    border-radius: 0.5rem;
    background: #111;
}

button, input {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
  appearance: button;

  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
}

button:active, [type="button"]:active, [type="reset"]:active, [type="submit"]:active {
  border: none;
  box-shadow: none;
  outline: none;
}

button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

.sign-up{
    color: #999;
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.875rem;

    margin: 1.2rem;
}

.sign-up a {
    color: #0CC1CE;
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.875rem;
}


</style>