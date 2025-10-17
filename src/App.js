import React, { useState } from "react";

const questions = [
  {
    q: "朝の目覚めはどんな感じ？",
    a: [
      "目覚ましが鳴る前に起きる",
      "スヌーズを何度も押す",
      "ギリギリまで寝ていたい",
      "朝はエンジンがかかるのに時間がかかる",
    ],
  },
  {
    q: "寝る時間はだいたい？",
    a: [
      "夜10時前には寝る",
      "11時〜0時ごろ",
      "深夜1〜2時",
      "かなり遅くまで起きている",
    ],
  },
  {
    q: "理想的な睡眠時間は？",
    a: ["7〜8時間はしっかり寝たい", "6時間くらいで十分", "5時間以下でも平気", "日によってまちまち"],
  },
  {
    q: "休日の過ごし方は？",
    a: ["朝早く起きて活動する", "少しゆっくり起きて出かける", "午前中は寝ていたい", "昼過ぎまでベッドでゴロゴロ"],
  },
  {
    q: "眠る前の習慣は？",
    a: ["スマホやSNSをチェックする", "本を読む・音楽を聴く", "すぐ寝ようとして電気を消す", "寝る前は考えごとをしてしまう"],
  },
  {
    q: "エネルギーが最も高い時間帯は？",
    a: ["朝（午前中）", "午後（昼過ぎ〜夕方）", "夜", "深夜〜早朝"],
  },
  {
    q: "睡眠の悩みがある？",
    a: ["寝つきが悪い", "途中で目が覚める", "朝起きても疲れている", "特に問題なし"],
  },
];

const results = {
  lion: {
    title: "🦁 ライオン型（早起きタイプ）",
    desc: "朝に最も集中できるタイプ。午前中に重要な仕事や勉強を済ませると効率的。夜は早めにリラックスモードへ。",
  },
  bear: {
    title: "🐻 クマ型（平均タイプ）",
    desc: "太陽のリズムに沿って生活するタイプ。睡眠の質を高めるには、毎日同じ時間に寝起きするのがカギ。",
  },
  wolf: {
    title: "🐺 オオカミ型（夜型タイプ）",
    desc: "夜になると集中力が上がるタイプ。朝は無理せず、夜の創造的な時間をうまく使うのがおすすめ。",
  },
  dolphin: {
    title: "🐬 イルカ型（浅眠タイプ）",
    desc: "眠りが浅く繊細なタイプ。寝る前のデジタル断ちや、深呼吸・瞑想などが効果的です。",
  },
};

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const getResult = () => {
    const score = answers.reduce((acc, _, i) => acc + i, 0);
    if (score < 7) return results.lion;
    if (score < 14) return results.bear;
    if (score < 21) return results.wolf;
    return results.dolphin;
  };

  if (step >= questions.length) {
    const result = getResult();
    return (
      <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
        <h2>あなたの睡眠タイプは…</h2>
        <h3>{result.title}</h3>
        <p>{result.desc}</p>
        <button
          onClick={() => {
            setStep(0);
            setAnswers([]);
          }}
          style={{ marginTop: 20 }}
        >
          もう一度やる
        </button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      <h2>{q.q}</h2>
      <div style={{ display: "grid", gap: "10px", marginTop: 20 }}>
        {q.a.map((option, i) => (
          <button key={i} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <p style={{ marginTop: 20 }}>
        質問 {step + 1} / {questions.length}
      </p>
    </div>
  );
}
