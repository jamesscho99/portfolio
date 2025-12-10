<template>
  <main class="contact-container">
    <section class="contact-section">
      <h2>📬 Contact Me</h2>
      <p class="contact-subtext">궁금한 점이나 협업 제안이 있다면 언제든지 연락 주세요!</p>

      <ul class="contact-cards">
        <li class="contact-card">
          <span class="icon">✉️</span>
          <div class="text">
            <strong>Email</strong>
            <a href="mailto:james.hyunseo@gmail.com">james.hyunseo@gmail.com</a>
          </div>
        </li>
        <li class="contact-card">
          <span class="icon">💻</span>
          <div class="text">
            <strong>GitHub</strong>
            <a href="https://github.com/jamesscho99" target="_blank">github.com/jamesscho99</a>
          </div>
        </li>
        <li class="contact-card">
          <span class="icon">🔗</span>
          <div class="text">
            <strong>LinkedIn</strong>
            <a href="https://www.linkedin.com/in/james-cho-975a3332a" target="_blank">
              linkedin.com/in/james-cho-975a3332a
            </a>
          </div>
        </li>
      </ul>
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
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-container {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  font-family: 'Noto Sans KR', sans-serif;
}

.contact-section {
  text-align: center;
  padding: 40px 20px;
}

.contact-section h2 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #1e2a38;
}

.contact-subtext {
  font-size: 16px;
  color: #555;
  margin-bottom: 40px;
}

/* 카드 리스트 */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
  align-items: center;
}

.contact-card {
  background: #ffffff;
  padding: 20px 25px;
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 24px;
}

.text {
  text-align: left;
}

.text strong {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
  color: #1e2a38;
}

.text a {
  font-size: 14px;
  color: #3366cc;
  text-decoration: none;
  transition: color 0.3s;
}

.text a:hover {
  color: #ffda44;
  text-decoration: underline;
}

/* 반응형 */
@media (max-width: 600px) {
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }

  .text a {
    font-size: 13px;
    word-break: break-all;
  }
}
</style>
