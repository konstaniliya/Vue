<template>
    <div>
        <div class="display">
            <input v-model.number="operand1" type="number">
            <input v-model.number="operand2" type="number">
            = {{ result }}
        </div>
        <div class="keyboard">
            <button @click="addition">+</button>
            <button @click="subtraction">-</button>
            <button @click="divide">/</button>
            <button @click="multiply">*</button>
            <button @click="divideInt">/ integer</button>
            <button @click="power">^</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calculator",
    data(){ 
        return {
        operand1: 0,
        operand2: 0,
        result: 0,
    }
    },
    methods: {
        addition(){
            this.result = this.operand1 + this.operand2;
        },
        subtraction(){
            this.result = this.operand1 - this.operand2;
        },
        divide(){
            if(this.operand2 != 0) {
                this.result = this.operand1 / this.operand2;
            }
            else {
                this.result = "Error, operand2 is 0"
            }
        },
        multiply(){
            this.result = this.operand1 * this.operand2;
        },
        divideInt(){
            if(this.operand2 != 0) {
                this.result = Math.floor(this.operand1 / this.operand2);
            }
            else {
                this.result = "Error, operand2 is 0"
            }
        },
        power(){
            this.result = Math.pow(this.operand1,this.operand2);
        },
    }
};
</script>

<style scoped>

</style>