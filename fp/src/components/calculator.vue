<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        v-bind:key="operand"
        v-bind:title="operand"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>

    <div class="screenKey">
      <input
        type="checkbox"
        name="isVisible"
        id="vision"
        v-model="isVisibleScreenKey"
      />
      <label for="isVisible">Отобразить экранную клавиатуру</label>
      <br />
      <div class="keys" v-if="isVisibleScreenKey">
        <button
          v-for="item in buttons"
          v-bind:key="item"
          @click="appendNum(item)"
        >
          {{ item }}
        </button>
        <button id="delete" @click="deleteNum()">&#8592;</button>
        <br />
        <input
          type="radio"
          name="selector"
          id="select"
          value="1"
          v-model="opSelector"
        />
        <label for="selector">Операнд 1</label>
        <input
          type="radio"
          name="selector"
          id="select"
          value="2"
          v-model="opSelector"
        />
        <label for="selector">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operands: ["+", "-", "*", "/", "/int", "pow"],
      result: 0,
      buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isVisibleScreenKey: false,
      opSelector: 0,
    };
  },
  methods: {
    calculate(operation) {
      switch (operation) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          if (this.operand2 != 0) {
            this.result = this.operand1 / this.operand2;
          } else {
            this.result = "Error, operand2 is 0";
          }
          break;
        case "/int":
          if (this.operand2 != 0) {
            this.result = Math.floor(this.operand1 / this.operand2);
          } else {
            this.result = "Error, operand2 is 0";
          }
          break;
        case "pow":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        default:
          break;
      }
    },
    deleteNum() {
      if (this.opSelector == 1) {
        let firstString = String(this.operand1);
        this.operand1 = Number(firstString.slice(0, firstString.length - 1));
      }
      if (this.opSelector == 2) {
        let secondString = String(this.operand2);
        this.operand2 = Number(secondString.slice(0, secondString.length - 1));
      }
    },
    appendNum(newNum) {
      if (this.opSelector == 1) {
        let firstString = String(this.operand1);
        this.operand1 = Number(firstString + newNum);
      }
      if (this.opSelector == 2) {
        let secondString = String(this.operand2);
        this.operand2 = Number(secondString + newNum);
      }
    },
  },
};
</script>

<style scoped>
.screenKey {
  margin-top: 100px;
}
</style>