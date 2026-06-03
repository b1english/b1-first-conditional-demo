# B1 Demo 版本2完整课程脚本（index-dimmed.html 当前版）

来源：`/Users/wangqin/Desktop/题型pool/B1 demo/index-dimmed.html`

版本2课程顺序：

| 顺序 | ID | 环节 | 题型 |
|---:|---|---|---|
| 1 | q1 | 环节1 · 词汇学习 | 语境词义选择 |
| 2 | q2 | 环节1 · 词汇学习 | 词汇拼写 |
| 3 | q3 | 环节1 · 词汇学习 | 语境词义选择 |
| 4 | q4 | 环节1 · 词汇学习 | 词汇拼写 |
| 5 | q5 | 环节2 · 句式学习 | 句意选择 |
| 6 | exp1 | 环节2 · 句式学习 | 语法讲解 |
| 7 | q6 | 环节2 · 句式学习 | 2222 |
| 8 | q7 | 环节2 · 句式学习 | 2222 |
| 9 | exp2 | 环节2 · 句式学习 | 语法讲解 |
| 10 | q8 | 环节3 · 句式泛化输出 | 情景9876-V3 |
| 11 | q9 | 环节3 · 句式泛化输出 | 情景9876-V3 |
| 12 | q12 | 环节3 · 听力 | 听力选择 |
| 13 | q13 | 环节3 · 听力 | 对话听力选择 |

## 全局资源字段

```js
ASSETS = {
  imagePickUp: "assets/images/pick-up.png",
  imageRunOut: "assets/images/run-out-of.png",
  audioNormalIcon: "assets/ui/audio-normal.png",
  audioSlowIcon: "assets/ui/audio-slow.png",
  robot: "assets/ui/robot.png",
  avatarA: "assets/ui/avatar-a.png",
  avatarB: "assets/ui/avatar-b.png",
  recordStart: "assets/ui/record-start.png",
  recordStop: "assets/ui/record-stop.png",
  recordSkip: "assets/ui/record-skip.png",
  recordRetry: "assets/ui/record-retry.png"
}
```

## 全局查词表 COURSE_GLOSS

```js
{
  if: "如果",
  we: "我们",
  i: "我",
  will: "将会；就会",
  get: "变得",
  hungry: "饿的",
  snacks: "零食",
  coffee: "咖啡",
  stay: "保持",
  awake: "清醒的",
  "pick up": "顺便买",
  "run out of": "用完；耗尽",
  some: "一些",
  bread: "面包",
  sandwiches: "三明治",
  have: "有",
  enough: "足够的",
  food: "食物",
  milk: "牛奶",
  the: "这个",
  baby: "小宝宝",
  cry: "哭",
  find: "找到",
  a: "一个；一家",
  supermarket: "超市",
  juice: "果汁",
  "don't": "表否定（不）",
  stop: "停下",
  "stop at": "停在",
  at: "在",
  gas: "汽油",
  station: "站",
  soon: "很快"
}
```

---

## 1. q1 · 语境词义选择 · pick up

```js
{
  type: "contextMeaning",
  section: "环节1 · 词汇学习 · 题1",
  phrase: "pick up",
  image: "assets/images/pick-up.png",
  sentence: "I always pick up some bread after work.",
  options: ["顺路购买；顺便买", "捡起来"],
  correct: "顺路购买；顺便买",
  analysis: "<strong>pick up</strong> 顺路购买；顺便买<br>指顺路、短途、小额的随意购买，不用于大额或正式购物。<br><br>句意：我下班后总是会买点面包。"
}
```

## 2. q2 · 词汇拼写 · pick up

```js
{
  type: "spelling",
  section: "环节1 · 词汇学习 · 题2",
  image: "assets/images/pick-up.png",
  fullPhrase: "pick up some bread",
  translation: "买点面包",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["pick up", "some", "bread"],
  fixedWord: "",
  chunks: ["pick", "up", "some", "bread"],
  options: ["pick", "up", "some", "bread"]
}
```

## 3. q3 · 语境词义选择 · run out of

```js
{
  type: "contextMeaning",
  section: "环节1 · 词汇学习 · 题3",
  phrase: "run out of",
  image: "assets/images/run-out-of.png",
  sentence: "We often run out of gas on long trips.",
  options: ["用完；耗尽", "跑出去"],
  correct: "用完；耗尽",
  analysis: "<strong>run out of</strong> 用完；耗尽。<br><br>句意：我们在长途旅行时经常把汽油用完。"
}
```

## 4. q4 · 词汇拼写 · run out of

```js
{
  type: "spelling",
  section: "环节1 · 词汇学习 · 题4",
  image: "assets/images/run-out-of.png",
  fullPhrase: "run out of gas",
  translation: "用完汽油",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["run out of", "gas"],
  fixedWord: "",
  chunks: ["run", "out", "of", "gas"],
  options: ["run", "out", "of", "gas"]
}
```

## 5. q5 · 句意选择

```js
{
  type: "sentenceMeaning",
  section: "环节2 · 句式学习 · 题5",
  sentence: "If we run out of snacks, we will get hungry.",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["If", "we", "run out of", "snacks", "we", "will", "get", "hungry"],
  stem: "这句话的意思是：",
  options: [
    "如果我们把零食吃完了，我们就会饿。",
    "如果我们买点零食，我们就会饿。"
  ],
  correct: "如果我们把零食吃完了，我们就会饿。"
}
```

## 6. exp1 · 语法讲解

```js
{
  type: "explanation",
  tab: "语法讲解",
  html: "<strong style=\"color:#4576F0\">If ..., ... will ...</strong> = 如果（条件发生），就会（随之产生某个结果）。<br><br>例句：If we run out of snacks, we will get hungry.（如果我们把零食吃完了，我们就会饿。）"
}
```

## 7. q6 · 2222 · run out of

```js
{
  type: "twoOption",
  section: "环节2 · 句式学习 · 题6",
  prompt: "如果我们吃完了零食，我们就会饿。",
  promptSegments: [
    { text: "如果", lookup: "If" },
    { text: "我们", lookup: "we" },
    { text: "吃完了", lookup: "run out of" },
    { text: "零食", lookup: "snacks" },
    "，",
    { text: "我们", lookup: "we" },
    { text: "就会", lookup: "will" },
    { text: "饿", lookup: "get hungry" },
    "。"
  ],
  fullSentence: "If we run out of snacks, we will get hungry.",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["If", "we", "run out of", "snacks", "we", "will", "get", "hungry"],
  groups: [
    { zh: "如果", options: ["If", "Will"], correct: "If" },
    { zh: "我们吃完了零食", options: ["we run out of snacks", "we pick up some snacks"], correct: "we run out of snacks" },
    { zh: "我们", options: ["we", "they"], correct: "we" },
    { zh: "将会", options: ["will", "would"], correct: "will" },
    { zh: "觉得饿", options: ["get hungry", "run out of snacks"], correct: "get hungry" }
  ]
}
```

## 8. q7 · 2222 · pick up

```js
{
  type: "twoOption",
  section: "环节2 · 句式学习 · 题7",
  prompt: "如果我们买点咖啡，我们就会保持清醒。",
  promptSegments: [
    { text: "如果", lookup: "If" },
    { text: "我们", lookup: "we" },
    { text: "买", lookup: "pick up" },
    { text: "点", lookup: "some" },
    { text: "咖啡", lookup: "coffee" },
    "，",
    { text: "我们", lookup: "we" },
    { text: "就会", lookup: "will" },
    { text: "保持", lookup: "stay" },
    { text: "清醒", lookup: "awake" },
    "。"
  ],
  fullSentence: "If we pick up some coffee, we will stay awake.",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["If", "we", "pick up", "some", "coffee", "we", "will", "stay", "awake"],
  groups: [
    { zh: "如果", options: ["If", "Will"], correct: "If" },
    { zh: "我们买点咖啡", options: ["we pick up some coffee", "we run out of coffee"], correct: "we pick up some coffee" },
    { zh: "我们", options: ["we", "they"], correct: "we" },
    { zh: "将会", options: ["will", "would"], correct: "will" },
    { zh: "保持清醒", options: ["stay awake", "pick up some coffee"], correct: "stay awake" }
  ]
}
```

## 9. exp2 · 语法讲解

```js
{
  type: "explanation",
  tab: "语法讲解",
  html: "1. if 引导的部分是条件<strong style=\"color:#4576F0\">从句</strong>，用<strong style=\"color:#4576F0\">一般现在时</strong>。<br>2. 后面说明结果的部分是<strong style=\"color:#4576F0\">主句</strong>，用<strong style=\"color:#4576F0\">一般将来时</strong>（will + 动词原形）。<br>3. 记忆口诀：<strong style=\"color:#4576F0\">主将从现</strong>。"
}
```

## 10. q8 · 情景9876-V3 · pick up

```js
{
  type: "scenario",
  section: "环节3 · 句式泛化输出 · 题8",
  prompt: "你和同伴在服务站停车休息。你想提议你们顺便买些三明治，这样你们就不会饿肚子了。你可以说：",
  fullSentence: "If we pick up some sandwiches, we will have enough food.",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["If", "we", "pick up", "some", "sandwiches", "we", "will", "have", "enough", "food"],
  translation: "如果我们买点三明治，就有足够的东西吃了。",
  hasHint: true,
  hintDefault: true,
  slotHintsDefaultVisible: false,
  recordHintDefaultVisible: false,
  recordFirstAttemptAllCorrect: true,
  recordHints: [
    "试着用句型 *If ..., ... will ...* 来回答。",
    "顺便买 = *pick up + 名词*",
    "一些三明治 = *some sandwiches*",
    "足够的食物 = *enough food*"
  ],
  chunks: [
    { zh: "如果", answer: "If" },
    { zh: "我们", answer: "we" },
    { zh: "顺便买", answer: "pick up" },
    { zh: "一些三明治", answer: "some sandwiches" },
    { zh: "我们", answer: "we" },
    { zh: "将会", answer: "will" },
    { zh: "有", answer: "have" },
    { zh: "足够的食物", answer: "enough food" }
  ],
  options: ["If", "we", "pick up", "some sandwiches", "we", "will", "have", "enough food", "run out of", "some coffee"]
}
```

## 11. q9 · 情景9876-V3 · run out of

```js
{
  type: "scenario",
  section: "环节3 · 句式泛化输出 · 题9",
  prompt: "你和同伴出行的车上带着小宝宝，你想提醒同伴，要是牛奶喝完了，小宝宝就会哭。你可以说：",
  fullSentence: "If we run out of milk, the baby will cry.",
  gloss: "COURSE_GLOSS",
  lookupUnits: ["If", "we", "run out of", "milk", "the", "baby", "will", "cry"],
  translation: "如果我们把牛奶喝完了，小宝宝就会哭。",
  hasHint: true,
  hintDefault: true,
  slotHintsDefaultVisible: false,
  recordHintDefaultVisible: false,
  recordFirstAttemptAllCorrect: true,
  recordHints: [
    "试着用句型 *If ..., ... will ...* 来回答。",
    "耗尽某物 = *run out of + 名词*",
    "小宝宝 = *the baby*"
  ],
  chunks: [
    { zh: "如果", answer: "If" },
    { zh: "我们", answer: "we" },
    { zh: "用完", answer: "run out of" },
    { zh: "牛奶", answer: "milk" },
    { zh: "小宝宝", answer: "the baby" },
    { zh: "将会", answer: "will" },
    { zh: "哭", answer: "cry" }
  ],
  options: ["If", "we", "run out of", "milk", "the baby", "will", "cry", "pick up", "snacks"]
}
```

## 12. q12 · 听力选择

```js
{
  type: "listeningChoice",
  section: "环节3 · 听力 · 题12",
  audioText: "We will take a long trip tomorrow. If we run out of snacks, we will get hungry. So we always bring a lot of snacks.",
  translation: "我们明天要长途旅行。如果我们把零食吃完了，我们就会饿。所以我们总是带很多零食。",
  question: "听音频，回答问题：\nIf they run out of snacks, they will ______.",
  options: ["get hungry", "stop the trip", "pick up more snacks"],
  correct: "get hungry",
  analysis: "原文直接说了 If we run out of snacks, we will get hungry。"
}
```

## 13. q13 · 对话听力选择

```js
{
  type: "dialogueListening",
  section: "环节3 · 听力 · 题13",
  audioText: "A: I'm hungry. B: Let's stop at the next service area. If we pick up some sandwiches, we will have enough food. A: Good idea. But what about the baby? If we run out of milk, the baby will cry. B: Don't worry. We still have a lot of milk.",
  question: "听音频，回答问题：\nIf they stop at the service area (服务区), they will ______.",
  options: ["get hungry", "run out of milk", "pick up some sandwiches"],
  correct: "pick up some sandwiches",
  analysis: "Tommy 提议停下时说 If we pick up some sandwiches, we will have enough food，所以他们停下是为了买三明治。",
  turns: [
    {
      side: "left",
      speaker: "A",
      text: "I'm hungry.",
      audioText: "I'm hungry.",
      translation: "我饿了。"
    },
    {
      side: "right",
      speaker: "B",
      text: "Let's stop at the next service area. If we pick up some sandwiches, we will have enough food.",
      audioText: "Let's stop at the next service area. If we pick up some sandwiches, we will have enough food.",
      translation: "我们在下一个服务区停一下吧。如果我们买点三明治，就有足够的东西吃了。"
    },
    {
      side: "left",
      speaker: "A",
      text: "Good idea. But what about the baby? If we run out of milk, the baby will cry.",
      audioText: "Good idea. But what about the baby? If we run out of milk, the baby will cry.",
      translation: "好主意。但宝宝怎么办？如果我们把牛奶喝完了，宝宝就会哭。"
    },
    {
      side: "right",
      speaker: "B",
      text: "Don't worry. We still have a lot of milk.",
      audioText: "Don't worry. We still have a lot of milk.",
      translation: "别担心。我们还有很多牛奶。"
    }
  ]
}
```

