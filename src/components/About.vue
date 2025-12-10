<template>
  <main class="about-container">
    <section class="about-section fade-slide" v-for="(section, index) in sections" :key="index">
      <h2>{{ section.title }}</h2>
      <template v-if="section.type === 'paragraphs'">
        <p v-for="(p, idx) in section.content" :key="idx">{{ p }}</p>
      </template>
      <template v-if="section.type === 'table'">
        <div class="table-wrapper">
          <table class="about-table">
            <thead>
              <tr>
                <th v-for="(header, hIdx) in section.headers" :key="hIdx">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rIdx) in section.rows" :key="rIdx">
                <td v-for="(cell, cIdx) in row" :key="cIdx">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
  name: 'AboutPage',
  data() {
    return {
      sections: [
        {
          title: '📄 자기소개 (Profile)',
          type: 'paragraphs',
          content: [
            '저는 조용하고 소심한 성격을 지녔지만, 상대방의 이야기를 주의 깊게 듣고 진심으로 공감하는 능력을 갖추고 있습니다. 경청을 통해 상대가 진정으로 말하고자 하는 바를 파악하는 데 능숙하며, 대화 흐름을 잘 읽고 반응할 수 있습니다.',
            '일할 때는 의사소통을 가장 중요하게 생각하며, 상대방의 요지를 정확히 이해하고 정리하여 전달하는 것을 목표로 합니다.',
            '삶의 태도는 "주어진 일에 최선을 다해 회사에 기여하고, 성실하게 재정적 여유를 쌓은 후, 여유가 생기면 어려운 이웃을 돕는다"는 신념을 가지고 있습니다. 취미로는 탁구🏓와 배드민턴🏸을 즐기며, 사람들과 이야기 나누는 것을 좋아합니다.'
          ]
        },
        {
          title: '💬 성격 및 가치관 (My Values & Personality)',
          type: 'paragraphs',
          content: [
            '저의 가장 큰 강점은 공감 능력입니다. 남의 이야기를 주의 깊게 듣고 감정적으로 위로할 수 있으며, 경청을 통해 상대방의 본심을 잘 파악합니다.',
            '조용하고 소심한 성격이지만, 상대방의 말을 논리적으로 정리해 전달하려 노력합니다. 일할 때는 의사소통을 최우선으로 생각하며, 협업 시 실수를 줄이고 업무 방향을 정확히 잡는 데 중점을 둡니다.'
          ]
        },
        {
          title: '🚀 목표 및 비전 (Vision)',
          type: 'table',
          headers: ['기간', '목표'],
          rows: [
            ['1년 차', '가천대학교 졸업 (2026년 2월 예정)'],
            ['2~3년 차', '광운대학교 인공지능응용학과 대학원 석사 과정 진학'],
            ['4 차', '취업']
          ]
        },
        {
          title: '🌟 강점 및 약점 (Strengths & Weaknesses)',
          type: 'table',
          headers: ['강점 (Strengths)', '약점 (Weaknesses)'],
          rows: [
            ['공감 능력 뛰어남', '상대방 말을 논리적으로 정리하는 데 보완 필요'],
            ['상대방 이야기를 주의 깊게 경청', '발표 시 긴장하여 표현이 매끄럽지 않을 때 있음'],
            ['친구들과 잘 어울림', '조용하고 내성적인 성격'],
            ['문제 해결에 몰입하고 끈기 있게 도전', '-'],
            ['목표를 향해 끈질기게 도전하는 집요함', '-'],
            ['발표 및 피드백 과정에서 개선 능력', '-']
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-container {
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  background: #f4f6fa;
  font-family: 'Noto Sans KR', sans-serif;
}

.about-section {
  margin-bottom: 40px;
  padding: 30px 25px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;
}

.about-section:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.about-section h2 {
  font-size: 22px;
  color: #1e2a38;
  margin-bottom: 15px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.about-section p {
  font-size: 15px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 12px;
}

.table-wrapper {
  overflow-x: auto;
}

.about-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  margin-top: 20px;
}

.about-table th,
.about-table td {
  border: 1px solid #ddd;
  padding: 14px;
  text-align: left;
  font-size: 14px;
}

.about-table th {
  background-color: #f4f6f8;
  color: #1e2a38;
  text-align: center;
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
  .about-section {
    padding: 20px 16px;
  }

  .about-section h2 {
    font-size: 18px;
  }

  .about-section p {
    font-size: 14px;
  }

  .about-table th,
  .about-table td {
    font-size: 13px;
    padding: 10px;
  }
}
</style>
