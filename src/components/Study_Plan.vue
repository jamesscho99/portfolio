<!-- src/components/KwuStudyPlan.vue -->
<template>
  <div class="study-plan-page">
    <div class="study-plan-card">
      <header class="study-plan-header">
        <h1>광운대학교 대학원 학업계획서</h1>
        <p class="study-plan-meta">지원자: 조현서 · 전공: 응용통계학 / 컴퓨터공학</p>
      </header>

      <main class="study-plan-content">
        <!-- 1. 소개 및 배경 -->
        <section class="study-plan-section">
          <h2>1. 학부 전공과 준비 과정</h2>
          <p>
            저는 가천대학교 응용통계학과와 컴퓨터공학과를 복수전공 중인 4학년 조현서입니다.
            복수전공을 통해 확률·통계, 회귀분석, 실험계획법과 같은 정량적 분석 기법부터
            알고리즘, 데이터베이스, 인공지능, 머신러닝 과목까지 폭넓게 수강하며
            데이터 사이언스의 기초를 다져 왔습니다.
          </p>
          <p>
            또한 ‘빅데이터 분석 기반 AI 알고리즘 개발’ 부트캠프를 수료하며
            파이썬 기반의 데이터 처리, 딥러닝 프레임워크 활용, 모델 성능 평가 등을
            실습 위주로 경험했습니다.
            이러한 과정 속에서 단순히 예측 정확도를 높이는 것을 넘어,
            복잡한 데이터 속에서 “무슨 일이 어떻게 일어나는지”를 설명하고,
            구조와 원인을 밝혀내는 연구에 관심을 갖게 되었습니다.
          </p>
        </section>

        <!-- 2. 관심 분야 및 문제의식 -->
        <section class="study-plan-section">
          <h2>2. 관심 연구 분야 및 문제의식</h2>
          <p>
            저의 관심은 자연스럽게 데이터 마이닝과 온톨로지, 그리고 Causal AI를 결합한 방향으로
            구체화되었습니다. 현대의 제조·의료·교육 현장에서는 다양한 시스템에서 발생한 로그와
            비정형 데이터가 대규모로 축적되고 있지만,
            전통적인 통계 분석이나 단순 예측 모델만으로는
            전체 업무 흐름과 근본 원인을 파악하는 데 한계가 있다고 느꼈습니다.
          </p>
          <p>
            이벤트 로그로부터 실제 업무 프로세스를 복원하고,
            변이와 병목을 분석하는 프로세스 마이닝은
            제가 배워 온 통계·컴퓨터공학 지식을 통합적으로 활용할 수 있는 분야입니다.
            여기에 온톨로지 기반 그래프 DB를 활용해 이벤트와 자원, 도메인 개념 간의 관계를 구조화하고,
            Causal AI를 통해 상관관계를 넘어 인과적 구조를 식별한다면,
            데이터에 기반한 프로세스 이해와 개선이 한 단계 더 깊어질 수 있다고 생각합니다.
          </p>
        </section>

        <!-- 3. 대학원에서의 학업 계획 -->
        <section class="study-plan-section">
          <h2>3. 대학원에서의 학업 계획</h2>
          <p>
            광운대학교 대학원 석사 과정에 진학하게 된다면,
            우선 프로세스 마이닝, 데이터마이닝, 통계적 모형화, 인과추론,
            지식표현 및 온톨로지 관련 교과목을 중심으로
            이론적 기반을 체계적으로 쌓고자 합니다.
          </p>
          <p>
            학부에서 학습한 회귀분석, 다변량분석, 머신러닝 기초를 바탕으로,
            이벤트 데이터의 시계열적·순차적 특성을 다루는 방법과
            로그 데이터의 통계적 특성을 이해하는 데 힘쓰겠습니다.
            동시에 데이터베이스, 분산 처리, 소프트웨어 공학 관련 배경을 활용해
            실제 로그를 수집·전처리하고 분석 환경을 구축하는 능력을 강화하겠습니다.
          </p>
          <p>
            이를 통해 “도메인 온톨로지 설계 → 이벤트 로그 매핑 → 프로세스 모델 도출
            → 통계적·인과적 분석”으로 이어지는 전체 파이프라인을
            스스로 설계·구현할 수 있는 연구 역량을 기르고 싶습니다.
          </p>
        </section>

        <!-- 4. 구체적인 연구 계획 -->
        <section class="study-plan-section">
          <h2>4. 구상 중인 연구 주제</h2>
          <p>
            연구 측면에서는
            ① 도메인 온톨로지를 이용한 이벤트 로그의 의미적 통합 및 추상화,
            ② Causal AI와 프로세스 마이닝을 결합한 프로세스 변이의 원인 분석,
            ③ 제조·의료·교육 등 실제 도메인에서의 실증 연구를
            핵심 주제로 삼고 싶습니다.
          </p>
          <p>
            예를 들어 제조 현장에서 설비 고장이나 품질 불량이 발생했을 때,
            온톨로지를 이용해 공정·자원·제품 정보를 구조화하고,
            이벤트 로그로부터 다양한 프로세스 변이 패턴을 추출한 뒤,
            Causal AI 기법을 적용해 어떤 경로와 조건이 문제 발생과
            인과적으로 연결되는지 분석하는 연구를 구상하고 있습니다.
          </p>
          <p>
            또한 의료 데이터나 교육 플랫폼 로그에 대해서도,
            표준 코드 체계와 온톨로지를 활용하여 환자 경로 또는 학습 경로를 정의하고,
            통계적 검정과 생존분석, 경로 군집 분석을 통해
            각 경로의 성과 차이를 정량적으로 평가하는 연구를 수행해 보고자 합니다.
          </p>
        </section>

        <!-- 5. 연구실 기여와 성장 목표 -->
        <section class="study-plan-section">
          <h2>5. 연구실 기여 및 장기 목표</h2>
          <p>
            연구실 생활에서는 파이썬과 R을 활용한 데이터 전처리, 시각화, 모델링을 성실히 담당하고,
            통계적 사고를 바탕으로 실험 설계와 성능 평가 지표를 제안하며
            공동 연구에 기여하고 싶습니다.
            학회 발표와 논문 게재를 목표로,
            문헌 조사와 실험 재현부터 차근차근 시작해 제 연구 주제를 구체화해 나가겠습니다.
          </p>
          <p>
            아직 프로세스 마이닝과 온톨로지, Causal AI에 대한 이해는 기초 수준에 머물러 있으나,
            대학원에서의 체계적인 교육과 지속적인 연구 경험을 통해 기초를 단단히 다지고,
            응용통계학과 컴퓨터공학의 융합 역량을 바탕으로
            산업 데이터 분석과 프로세스 혁신에 기여할 수 있는 연구자로 성장하고자 합니다.
          </p>
        </section>
      </main>

      <footer class="study-plan-footer">
        <p>작성자: 조현서</p>
        <p>작성일: 2025-12-10</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// 별도 로직은 필요 없어서 비워 둡니다.
</script>

<style scoped>
.study-plan-page {
  min-height: 100vh;
  padding: 40px 16px;
  background: #f3f4f6; /* 연한 회색 배경 */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.study-plan-card {
  max-width: 900px;
  width: 100%;
  background: #ffffff;
  border-radius: 18px;
  padding: 32px 28px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
}

.study-plan-header {
  text-align: center;
  margin-bottom: 24px;
}

.study-plan-header h1 {
  font-size: 1.8rem;
  margin-bottom: 6px;
}

.study-plan-meta {
  font-size: 0.95rem;
  color: #6b7280;
}

.study-plan-content {
  margin-top: 8px;
}

.study-plan-section + .study-plan-section {
  margin-top: 24px;
}

.study-plan-section h2 {
  font-size: 1.15rem;
  margin-bottom: 6px;
  color: #111827;
}

.study-plan-section p {
  font-size: 0.98rem;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 10px;
}

.study-plan-footer {
  margin-top: 24px;
  border-top: 1px solid #e5e7eb;
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #6b7280;
}
</style>
