<template>
    <div class="dashboard">
        <header>
            <button>
                <img src="/img/menu.svg" alt="menu svg">
            </button>
            <h1>Hi, <strong>%User%</strong> <br/>
                We have <strong>movies available</strong>for you.
            </h1>
            <SearchBar/>
        </header>
        <main>
            <slot />
        </main>
        <img
        class="logo"
        src="/img/logo.svg?url"
        alt="logo">
        <Footer/>
    </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  margin: 0 1rem ;
}

header {
    width: 100%;
}

main {
    width: 100%;
}

Footer {
    width: 100%;
    display: flex;
    justify-content: center;
}
.logo {
    margin: 0;
    width: 5.25rem;
    height: 1.5rem;
    position: absolute;
    bottom: 0;
    padding: 6%;
}

h1 {
    color: #FFF;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

</style>