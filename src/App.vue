<template>
  <div>
    <header class="main-header">
      <div class="gachon-logo">
        <img src="@/assets/가천대로고.jpg" alt="Gachon University Logo" />
      </div>

      <div class="container header-container">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/포티폴리오디자인.jpg" alt="조현서 포트폴리오 로고" />
          </router-link>
        </div>

        <nav>
          <ul>
            <li><router-link to="/about" :class="{ active: activeNav === 'about'}">About</router-link></li>
            <li><router-link to="/resume" :class="{ active: activeNav === 'resume'}">Resume</router-link></li>

            <li class="dropdown">
              <router-link to="/projects" :class="{ active: activeNav === 'projects'}">Projects</router-link>
              <ul class="dropdown-menu">
                <li><router-link :to="{ path: '/projects', query: { tab: 'school' } }">학교 프로젝트</router-link></li>
                <li><router-link :to="{ path: '/projects', query: { tab: 'outside' } }">교외 프로젝트</router-link></li>
              </ul>
            </li>

            <li class="dropdown">
              <router-link to="/contact" :class="{ active: activeNav === 'contact'}">Contact</router-link>
              <ul class="dropdown-menu">
                <li><a href="mailto:james.hyunseo@gmail.com">Email</a></li>
                <li><a href="https://github.com/jamesscho99" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/james-cho-975a3332a" target="_blank">LinkedIn</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeNav: ''
    };
  },
  watch: {
    // 경로가 바뀔 때마다 activeNav 업데이트
    $route(to) {
      this.setActiveNav(to.path);
    }
  },
  created() {
    this.setActiveNav(this.$route.path);
  },
  methods: {
  setActiveNav(path) {
    if (path.includes('/about')) this.activeNav = 'about';
    else if (path.includes('/resume')) this.activeNav = 'resume';
    else if (path.includes('/projects')) this.activeNav = 'projects';
    else if (path.includes('/contact')) this.activeNav = 'contact';
    else this.activeNav = 'home';
  }
}
}
</script>


<style>

</style>

