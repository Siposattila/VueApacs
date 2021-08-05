<template>
    <div class="calculator">
        <Form :title="'Számológép'" :subtitle="'Egy szópás egy számolás!'" :submitTitle="'Szopás'" :callback="'calculate'" :inputs="[
            {
                id: 'number1',
                type: 'text',
                placeholder: 'Szám 1'
            },
            {
                id: 'number2',
                type: 'text',
                placeholder: 'Szám 2'
            },
            {
                id: 'type',
                type: 'select',
                placeholder: 'Művelet',
                options: ['+', '-', '*', '/', '%'],
                defaultOptionPlaceHolder: 'Válassz egy műveletet'
            },
        ]" />
        <h1>{{this.result}}</h1>
    </div>
</template>

<script>
import Form from "@/components/Form";

export default {
    name: "Calculator",
    data: function() {
        return {
            number1: 0,
            number2: 0,
            type: "",
            result: 0
        }
    },
    components: {
        Form
    },
    methods: {
        calculate: function() {
            var num1 = parseInt(this.number1);
            var num2 = parseInt(this.number2);
            switch (this.type) {
                case "+":
                    this.result = num1+num2;
                    break;
                case "-":
                    this.result = num1-num2;
                    break;
                case "*":
                    this.result = num1*num2;
                    break;
                case "/":
                    this.result = num1/num2;
                    break;
                case "%":
                    this.result = num1%num2;
                    break;
                default:
                    this.result = 0;
                    break;
            }
        }
    }
}
</script>

<style>

</style>