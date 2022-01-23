import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addPaymentListData(state, payload) {
            state.paymentsList.push(payload);
            state.paymentsList[state.paymentsList.length-1].id = state.paymentsList.length;
        },
        editPaymentListData(state, payload) {
            let id = state.paymentsList[payload.position-1].id;
            state.paymentsList.splice(payload.position-1,1,payload.loadData);
            state.paymentsList[payload.position-1].id = id;
        },
        deletePaymentListData(state, payload) {
            let i = 0;
            for(i in state.paymentsList){
                if(state.paymentsList[i].id == payload.start) {
                    break;
                }
            }
            state.paymentsList.splice(i,payload.count);
        },
        editPaymentListFirstElement(state, payload) {
            // state.paymentsList[0] = payload
            Vue.set(state.paymentsList, 0, payload);
            // OR
            state.paymentsList[0] = payload;
            state.paymentsList = [...state.paymentsList];
        },
        setCategoryData(state, paylaod) {
            state.categoryList = paylaod;
        },
    },
    getters: {
        getPaymentsListFullValuePrice: (state) => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
        },
        getPaymentsList: (state) =>
            state.paymentsList?.length ? state.paymentsList : [],
        getCategoryList: state => state.categoryList,
        countMyCost(state){
            let payment = 0;
            let payload = 
            {
                en: 0,
                tr: 0,
                ed: 0,
                in: 0,
                fo: 0,
                sp: 0,
            }
            for(payment in state.paymentsList){
                if(state.paymentsList[payment].category=="Entertainment") payload.en += state.paymentsList[payment].value;
                if(state.paymentsList[payment].category=="Transport") payload.tr += state.paymentsList[payment].value;
                if(state.paymentsList[payment].category=="Education") payload.ed += state.paymentsList[payment].value;
                if(state.paymentsList[payment].category=="Internet") payload.in += state.paymentsList[payment].value;
                if(state.paymentsList[payment].category=="Food") payload.fo += state.paymentsList[payment].value;
                if(state.paymentsList[payment].category=="Sport") payload.sp += state.paymentsList[payment].value;
            }
            return payload;

        },
    },
    actions: {
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [];
                    for (let i = 1; i < 101; i++) {
                        items.push({
                            date: "20.12.2021",
                            category: "Education",
                            value: i,
                            id: i,
                        });
                    }
                    resolve(items);
                }, 2000);
            }).then((res) => commit("setPaymentsListData", res));
        },
        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = ["Sport", "Education", "Internet", "Food", "Transport","Entertainment"];
                    resolve(items);
                }, 2000);
            }).then((res) => commit("setCategoryData", res));
        },
    },
});
