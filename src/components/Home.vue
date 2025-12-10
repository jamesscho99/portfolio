<template>
  <main class="home-container fade-slide">
    <section class="main-intro">
      <h1 class="main-title">환영합니다!</h1>
      <p class="main-subtitle">
        벌꿀오소리처럼 어려운 상황에서도 끈임없이 도전하는<br />
        <strong>조 현 서</strong> 입니다.<br />
        저의 이력과 프로젝트를 소개합니다.
      </p>
    </section>
  </main>
  <footer>
      <div class="container">
        <p>&copy; 2025 조현서. All rights reserved.</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Pretendard', 'Inter', sans-serif;
  background: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

.home-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  animation: fadeSlideUp 0.8s ease-in-out forwards;
}

.main-intro {
  text-align: center;
}

.main-title {
  font-size: 42px;
  font-weight: 800;
  color: #1e2a38;
  margin-bottom: 24px;
}

.main-subtitle {
  font-size: 18px;
  color: #444;
  line-height: 1.8;
}

.main-subtitle strong {
  color: #0057b8;
  font-weight: 600;
}

footer {
  text-align: center;
  margin-top: 80px;
  padding: 30px 0;
  background-color: #1e2a38;
  color: #ccc;
  font-size: 14px;
}

.fade-slide {
  animation: fadeSlideUp 0.6s ease-in-out forwards;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .main-title {
    font-size: 30px;
  }

  .main-subtitle {
    font-size: 16px;
  }

  .home-container {
    padding: 40px 16px;
  }
}

</style>
