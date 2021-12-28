
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const localDB = {
    page1: [
        {id: 1, date:'20.03.2020', category: 'Food', value:169},
        {id: 2, date:'21.03.2020', category: 'Navigation', value:170},
        {id: 3, date:'22.03.2020', category: 'Sport', value:1500},
    ],
    page2: [
        {id: 4, date:'23.03.2020', category: 'Food', value:15},
        {id: 5, date:'24.03.2020', category: 'Food', value:200},
        {id: 6, date:'25.03.2020', category: 'Sport', value:3000},
    ],
    page3: [
        {id: 7, date:'26.03.2020', category: 'Food', value:30},
        {id: 8, date:'27.03.2020', category: 'Entertainment', value:10},
        {id: 9, date:'28.03.2020', category: 'Education', value:25},
    ],
    page4: [
        {id: 10, date:'29.03.2020', category: 'Food', value:30},
        {id: 11, date:'30.03.2020', category: 'Entertainment', value:10},
        {id: 12, date:'31.03.2020', category: 'Education', value:25},
    ],
}


export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
        paymentsListIds:[],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            const newUniqIdsObs = payload.filter((item)=>{
                return state.paymentsListIds.indexOf(item.id)
            });
            const uniqIds = newUniqIdsObs.map(obj=>obj.id)
            state.paymentsList.push(...newUniqIdsObs);
            state.paymentsListIds.push(...uniqIds);
        },
        addPaymentListData(state, payload) {
            state.paymentsList.push(payload);
        },
        editPaymentListFirstElement(state, payload) {
            Vue.set(state.paymentsList, 0, payload)
            state.paymentsList[0] = payload;
        },
        setCategoryData(state, payload){
            state.categoryList = payload;
        }
    },
    getters: {
        getPaymentsListFullValuePrice: state => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0)
        },
        getPaymentsList: (state) => 
        state.paymentsList?.length ? state.paymentsList : [],
        getCategoryList: state => state.categoryList,
    },
    actions: {
        fetchData({commit},page) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = localDB[`page${page}`];
                    
                    resolve(items);
                }, 2000);
            }).then((res) => commit("setPaymentsListData", res));
        },

        fetchCategory({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = ['Sport','Education','Internet','Food','Transport'];
                    
                    resolve(items);
                }, 2000);
            }).then((res) => commit("setCategoryData", res));
        },
    },

});