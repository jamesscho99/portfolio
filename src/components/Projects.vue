<template>
  <main class="projects-container">
    <section class="projects-header fade-slide">
      <h2>📁 프로젝트 경험</h2>
      <p>데이터 분석부터 컴퓨터 비전, 자연어처리까지 다양한 주제를 다뤄본 경험입니다.</p>
    </section>

    <div class="tab-menu">
      <button class="tab-button" :class="{ active: activeTab === 'school' }" @click="activeTab = 'school'">
        🎓 학교 프로젝트
      </button>
      <button class="tab-button" :class="{ active: activeTab === 'outside' }" @click="activeTab = 'outside'">
        🧠 교외 프로젝트
      </button>
    </div>

    <!-- 프로젝트 리스트 -->
    <section v-show="activeTab === 'school'" class="tab-content fade-slide">
      <div class="project-card" v-for="(item, index) in schoolProjects" :key="`school-${index}`">
        <h4>{{ item.title }}</h4>
        <ul>
          <li><strong>📅 기간:</strong> {{ item.period }}</li>
          <li><strong>🛠 사용 기술:</strong> <span class="tech">{{ item.tech }}</span></li>
          <li><strong>👤 역할:</strong> {{ item.role }}</li>
          <li><strong>🏆 주요 성과:</strong> {{ item.outcome }}</li>
        </ul>
      </div>
    </section>

    <section v-show="activeTab === 'outside'" class="tab-content fade-slide">
      <div class="project-card" v-for="(item, index) in outsideProjects" :key="`outside-${index}`">
        <h4>{{ item.title }}</h4>
        <ul>
          <li><strong>📅 기간:</strong> {{ item.period }}</li>
          <li><strong>🛠 사용 기술:</strong> <span class="tech">{{ item.tech }}</span></li>
          <li><strong>👤 역할:</strong> {{ item.role }}</li>
          <li><strong>🏆 주요 성과:</strong> {{ item.outcome }}</li>
        </ul>
      </div>
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
  name: 'ProjectsPage',
  data() {
    return {
      activeTab: 'school',
      schoolProjects: [
        {
          title: '국민과 함께하는 데이터.AI 물가 예측 경진대회 (팀)',
          period: '2024년 8월 27일 ~ 2024년 11월 14일',
          tech: 'Python, LSTM, ARIMA, XGBoost, SARIMA',
          role: '데이터 분석, 모델 선정 및 개선',
          outcome: '데이터 탐색과 도메인 지식의 중요성을 체득',
        },
        {
          title: '서울시 소방시설 및 비상소화장치 최적배치 제안 (팀)',
          period: '2024년 11월 18일 ~ 2024년 12월 20일',
          tech: 'Python, KDE, ElasticNet, k-means, 회귀분석',
          role: '부족 지역 분석 및 최적 위치 제안',
          outcome: 'KDE를 통한 공간 분석 능력 강화',
        },
      ],
      outsideProjects: [
        {
          title: '기후 변화와 전력 소모 분석 (개인)',
          period: '2023년 8월 9일 ~ 2023년 8월 30일',
          tech: 'Python, Pandas, Numpy, Matplotlib',
          role: '기후 변화에 따른 전력 소모 데이터 분석',
          outcome: '첫 번째 개인 발표 및 데이터 분석 기본기 습득',
        },
        {
          title: '시대별 경제상황에 따른 출산율 분석 (개인)',
          period: '2023년 8월 9일 ~ 2023년 8월 30일',
          tech: 'Python, Pandas, Numpy, Matplotlib',
          role: 'EDA 분석 및 발표 진행',
          outcome: '데이터 탐색 및 시각화 훈련',
        },
        {
          title: '회귀분석을 통한 개 나이 예측 (개인)',
          period: '2023년 10월 20일 ~ 2023년 11월 15일',
          tech: 'Python, Pandas, Numpy, Matplotlib, PyCaret',
          role: '개의 특성 데이터 기반 회귀 모델 구축',
          outcome: '머신러닝 기초 이해 및 모델 자동화 경험',
        },
        {
          title: '강아지 이미지 감정 예측 (팀)',
          period: '2023년 10월 20일 ~ 2023년 11월 15일',
          tech: 'Python, TensorFlow (ResNet18, ResNet50, ImageNet)',
          role: '강아지 감정 분류 모델 개발',
          outcome: '딥러닝 모델 학습 흐름 이해',
        },
        {
          title: 'GPT 생성 텍스트 판별 (팀)',
          period: '2023년 12월 14일 ~ 2024년 1월 12일',
          tech: 'Python, LLM 모델, 앙상블',
          role: '사람 vs GPT 텍스트 분류 모델 개발',
          outcome: '자연어처리 첫 프로젝트 수행',
        },
        {
          title: '동물 이미지 분류 (FixMatch 이용) (팀)',
          period: '2023년 12월 14일 ~ 2024년 1월 12일',
          tech: 'Python, ResNet18, FixMatch',
          role: '8만 장 이미지 분류 및 반지도 학습 적용',
          outcome: 'FixMatch 이해 및 모델 성능 향상',
        },
      ],
    };
  },
  mounted() {
    const tabFromRoute = this.$route.query.tab;
    if (tabFromRoute === 'outside' || tabFromRoute === 'school') {
      this.activeTab = tabFromRoute;
    }
  },
  beforeRouteUpdate(to, from, next) {
    const tabFromRoute = to.query.tab;
    if (tabFromRoute === 'outside' || tabFromRoute === 'school') {
      this.activeTab = tabFromRoute;
    }
    next();
  },
};
</script>

<style scoped>
.projects-container {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  background: #f4f6fa;
  font-family: 'Noto Sans KR', sans-serif;
}

.projects-header {
  text-align: center;
  margin-bottom: 30px;
}

.projects-header h2 {
  font-size: 28px;
  font-weight: bold;
  color: #1e2a38;
}

.projects-header p {
  color: #555;
  font-size: 15px;
  margin-top: 10px;
}

.tab-menu {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 30px;
}

.tab-button {
  background: #e5e8ec;
  border: none;
  padding: 10px 22px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 600;
  color: #1e2a38;
  transition: all 0.3s ease;
}

.tab-button.active {
  background: #1e2a38;
  color: white;
  transform: scale(1.05);
}

.tab-button:hover {
  background: #ffda44;
  color: #1e2a38;
}

.project-card {
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

.project-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.05),
    0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.project-card h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e2a38;
}

.project-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
}

.project-card li {
  margin-bottom: 6px;
}

.project-card li strong {
  display: inline-block;
  width: 100px;
  color: #555;
  font-weight: 600;
}

.project-card .tech {
  color: #2b72d6;
  font-weight: 500;
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
  .tab-menu {
    flex-direction: column;
    gap: 10px;
  }

  .tab-button {
    width: 100%;
    font-size: 0.95rem;
  }

  .projects-header h2 {
    font-size: 24px;
  }

  .project-card {
    padding: 20px;
    border-radius: 12px;
  }

  .project-card h4 {
    font-size: 17px;
  }

  .project-card li strong {
    width: auto;
    display: block;
    margin-bottom: 2px;
  }
}
</style>
