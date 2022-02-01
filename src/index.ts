class HitAndBlow {
  answerSource = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  answer: string[] = [];
  tryCount = 0;

  setting() {
    const answerLength = 3;

    while (this.answer.length < answerLength) {
      const randNum = Math.floor(Math.random() * this.answerSource.length);
      const selectedItem = this.answerSource[randNum];
      if (!this.answer.includes(selectedItem)) {
        this.answer.push(selectedItem);
      }
    }
  }

  async play() {
    const inputArr = (
      await promptInput("「,区切りで3つの数字を入力してください」")
    ).split(",");
  }
}

const printLine = (text: string, breakLine: boolean = true) => {
  process.stdout.write(text + (breakLine ? "\n" : ""));
};

const promptInput = async (text: string) => {
  printLine(`\n${text}\n`, false);
  const input: string = await new Promise((resolve) =>
    process.stdin.once("data", (data) => resolve(data.toString()))
  );
  return input.trim();
};

(async () => {
  const name = await promptInput("名前を入力してください");
  console.log(name);
  const age = await promptInput("年齢を入力してください");
  console.log(age);
  process.exit();
})();

(async () => {
  const hitAndBlow = new HitAndBlow();
  hitAndBlow.setting();
  await hitAndBlow.play();
})();
