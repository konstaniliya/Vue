import { mount } from '@vue/test-utils'
import { nextTick } from 'vue';
import regeneratorRuntime from "regenerator-runtime"

import Calculator from "../components/Calculator.vue"

describe('Calculator', () => {
    it('test first operand input value', () => {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue('1');
        expect(wrapper.vm.operand1).toBe(1);
    })

    it('test second operand input value', () => {
        const wrapper = mount(Calculator);
        const operand2 = wrapper.find("input[name=operand2]");
        operand2.element.value = "1";
        operand2.trigger("input");
        // operand2.setValue("1")
        expect(wrapper.vm.operand2).toBe(1);
    })
    it('test sum', async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("5");
        expect(wrapper.vm.operand1).toBe(5);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("5");
        expect(wrapper.vm.operand2).toBe(5);

        const sumBtn = wrapper.find('button[name="+"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(10);
        })
    })
    // HW
    it('test sub',async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("5");
        expect(wrapper.vm.operand1).toBe(5);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("5");
        expect(wrapper.vm.operand2).toBe(5);

        const sumBtn = wrapper.find('button[name="-"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(0);
        })
    })
    it('test mul',async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("6");
        expect(wrapper.vm.operand1).toBe(6);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("3");
        expect(wrapper.vm.operand2).toBe(3);

        const sumBtn = wrapper.find('button[name="*"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(18);
        })
    })
    it('test devide',async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("6");
        expect(wrapper.vm.operand1).toBe(6);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("4");
        expect(wrapper.vm.operand2).toBe(4);

        const sumBtn = wrapper.find('button[name="/"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(6/4);
        })
    })
    it('test int.devide',async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("6");
        expect(wrapper.vm.operand1).toBe(6);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("4");
        expect(wrapper.vm.operand2).toBe(4);

        const sumBtn = wrapper.find('button[name="/int"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(1);
        })
    })
    it('test pow',async () => {
        const wrapper = mount(Calculator);

        const operand1 = wrapper.find("input[name=operand1]");
        operand1.setValue("5");
        expect(wrapper.vm.operand1).toBe(5);

        const operand2 = wrapper.find("input[name=operand2]");
        operand2.setValue("2");
        expect(wrapper.vm.operand2).toBe(2);

        const sumBtn = wrapper.find('button[name="pow"]');
        sumBtn.trigger('click');

        await nextTick(()=>{
            expect(wrapper.vm.result).toBe(25);
        })
    })
})