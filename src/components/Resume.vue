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
          content: `안녕하세요. 인공지능 분야 석사과정 진학을 목표로 하고 있는 조현서입니다.
        저는 데이터를 기반으로 현실의 문제를 분석하고, 인공지능 기법을 활용해 실질적인 가치를 만드는 과정에 큰 흥미를 가지고 있습니다. 학부 시절부터 프로그래밍과 알고리즘, 인공지능 관련 내용을 접하며, 이론을 공부하는 것에 그치지 않고 직접 구현하고 실험해 보는 과정에서 큰 보람을 느껴왔습니다.
        특히 저는 데이터 마이닝과 데이터간 관계성 분석에 관심을 두고 있습니다. 관련 강의와 프로젝트를 통해 기본적인 모델 구조와 학습 방법을 이해하고, 성능을 개선하기 위한 하이퍼파라미터 조정, 전처리 방법, 모델 구조 변경 등을 시도해 보며 인공지능 모델이 어떻게 실제 성능으로 이어지는지 경험해 왔습니다. 이 과정에서 단순히 높은 성능 수치만 추구하는 것이 아니라, 문제 설정과 데이터의 특성을 정확히 이해하는 것이 더 중요하다는 점을 깊이 깨달았습니다.
        저는 새로운 개념과 도구를 접하면 직접 실습해 보면서 이해를 넓혀가는 스타일입니다. 논문을 읽을 때에도 내용을 받아들이는 데에서 멈추지 않고, 가능한 부분은 코드를 재현하고 실험 환경을 구성해 보는 것을 목표로 합니다. 또한 협업 과정에서는 진행 상황을 투명하게 공유하고, 문제를 발견하면 함께 논의하여 해결책을 찾는 태도를 중요하게 생각합니다.
        인공지능 분야 석사과정에서는 보다 체계적인 연구 훈련을 통해, 제가 흥미를 느끼는 주제를 깊이 있게 탐구하고자 합니다. 이론적 토대를 탄탄히 다지는 동시에, 실제 데이터와 문제를 다루는 연구 경험을 쌓아 연구자로서도, 실무 문제 해결자로서도 신뢰받을 수 있는 인공지능 전문가로 성장하고 싶습니다.`
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
            '운전면허증(2종 보통)'
          ]
        },
        {
          title: '🗣 언어 능력 (Languages)',
          type: 'list',
          items: [
            '이중국적: 대한민국 / 미국',
            '영어(모국어): 수준 (상)',
            '한국어: 수준 (상)'
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
