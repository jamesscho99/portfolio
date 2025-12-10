<template>
  <main class="resume-container">
    <!-- 상단 프로필 영역 -->
    <div class="resume-header">
      <div class="header-text">
        <h3>Applied Statistics & Computer Science</h3>
        <h1>조현서</h1>
        <div class="contact-info">
          <p>📧 james.hyunseo@gmail.com</p>
          <p>📞 +82-10-9068-7459</p>
          <p>💻 
            <a href="https://github.com/jamesscho99" target="_blank">
              github.com/jamesscho99
            </a>
          </p>
        </div>
      </div>
      <div class="profile-img">
        <img :src="require('@/assets/증명사진.png')" alt="Profile Image" />
      </div>
    </div>

    <!-- 각 이력 항목 섹션들 -->
    <section v-for="section in sections" :key="section.title" class="resume-section fade-slide">
      <h2>{{ section.title }}</h2>
      <template v-if="section.type === 'list'">
        <ul>
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </template>
      <template v-else>
        <p>{{ section.content }}</p>
      </template>
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
  name: 'ResumePage',
  data() {
    return {
      sections: [
        {
          title: '자기소개',
          type: 'text',
          content: `안녕하세요, 조현서입니다. 통계학과 컴퓨터공학을 전공하며 데이터 분석과 소프트웨어 개발에 대한 기반을 다졌고, 다양한 프로젝트와 인턴 경험을 통해 실무 감각을 키워왔습니다. 특히 웹 프로그래밍, 머신러닝, 컴퓨터 비전에 관심이 많으며, 새로운 기술을 빠르게 습득하고 문제를 해결하는 데 강점을 지니고 있습니다.`
        },
        {
          title: '🎓 학력 (Education)',
          type: 'list',
          items: [
            '2019.03 ~ 가천대학교 입학 - 응용통계학과 & 컴퓨터공학과',
            '2026.02 ~ 졸업 예정'
          ]
        },
        {
          title: '💼 경력 (Experience)',
          type: 'list',
          items: [
            '공군 정보체계운영병 (2021.07 ~ 2023.04)',
            '메가스터디 부트캠프 (2023.07 ~ 2024.01) - 빅데이터 기반 AI 교육'
          ]
        },
        {
          title: '📜 자격증 (Certificates)',
          type: 'list',
          items: [
            '워드프로세서 (2021.01)',
            '컴퓨터활용능력 2급 (2014.07)'
          ]
        },
        {
          title: '🗣 언어 능력 (Languages)',
          type: 'list',
          items: [
            '이중국적: 대한민국 / 미국',
            '영어: 모국어 수준 (상)',
            '한국어: 모국어 수준 (상)'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.resume-container {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #333;
  background: #f4f6fa;
}

.resume-header {
  display: flex;
  max-width: 720px;
  margin: 0 auto 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}
.header-text {
  flex: 1;
  text-align: left;
}
.resume-header h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #1e2a38;
}

.resume-header h3 {
  font-size: 18px;
  color: #555;
  font-weight: 400;
}

.contact-info p {
  font-size: 14px;
  margin: 4px 0;
}

.contact-info a {
  color: #3366cc;
  text-decoration: none;
}

.profile-img {
  width: 120px;
  align-self: flex-end;  /* 텍스트의 마지막 라인과 정렬되도록 */
}
.profile-img img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resume-section {
  background: #ffffff;
  padding: 24px;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.03),
    0 8px 16px rgba(0, 0, 0, 0.06);
  max-width: 720px;
  transition: all 0.3s ease-in-out;
}

.resume-section:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.05),
    0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.resume-section h2 {
  color: #1e2a38;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: bold;
}

.resume-section ul {
  padding-left: 20px;
  font-size: 15px;
  color: #333;
  list-style-type: disc;
}

.resume-section p {
  font-size: 15px;
  line-height: 1.6;
}

.fade-slide {
  animation: fadeSlideUp 0.6s ease forwards;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .resume-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-img {
    margin-top: 20px;
  }

  .resume-header h1 {
    font-size: 28px;
  }

  .resume-section {
    padding: 20px 16px;
  }
}
</style>
