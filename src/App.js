// 일반적인 전역 store
// import { observable, observe } from "./components/observer.js";
// import { store } from "./components/store.js";

// export default function App({ $target }) {
//     this.init = () => {
//         observe(this.render);
//     };
//     const InputComponentA = () => `
//         <input id="stateA" value="${store.state.a}" />
//     `
//     const InputComponentB = () => `
//         <input id="stateB" value="${store.state.b}" />
//     `
//     const ResultComponent = () => `
//         <p>a + b = ${store.state.a + store.state.b}</p>
//     `

//     this.render = () => {
//         $target.innerHTML = `
//             ${InputComponentA()}
//             ${InputComponentB()}
//             ${ResultComponent()}
//         `;
//     };

//     $target.addEventListener("change", (e) => {
//         if (e.target.closest("#stateA")) {
//            store.setState({
//                 a: Number(e.target.value)
//            })
//         }
//         if (e.target.closest("#stateB")) {
//             store.setState({
//                 b: Number(e.target.value)
//            })
//         }
//     });

//     this.init();
// }



// vuex store
// import { observe } from "./components/observer.js";
// import { store } from "./vuex/vuexStore.js";

// export default function App({ $target }) {
//     const InputComponentA = () => `<input id="stateA" value="${store.state.a}" />`
//     const InputComponentB = () => `<input id="stateB" value="${store.state.b}" />`
//     const ResultComponent = () => `<p>a + b = ${store.state.a + store.state.b}</p>`

//     this.render = () => {
//         $target.innerHTML = `
//             ${InputComponentA()}
//             ${InputComponentB()}
//             ${ResultComponent()}
//         `;
//     };

//     $target.addEventListener("change", (e) => {
//         if (e.target.closest("#stateA")) {
//             store.commit('SET_A', Number(e.target.value))
//         }
//         if (e.target.closest("#stateB")) {
//             store.commit('SET_B', Number(e.target.value))
//         }
//     });

//     observe(this.render);
// }


// redux store
import { observe } from "./components/observer.js";
import { store, setA, setB } from "./redux/reduxStore.js";

export default function App({ $target }) {
    const InputComponentA = () => `<input id="stateA" value="${store.getState().a}" />`
    const InputComponentB = () => `<input id="stateB" value="${store.getState().b}" />`
    const ResultComponent = () => `<p>a + b = ${store.getState().a + store.getState().b}</p>`

    this.render = () => {
        $target.innerHTML = `
            ${InputComponentA()}
            ${InputComponentB()}
            ${ResultComponent()}
        `;
    };

    $target.addEventListener("change", (e) => {
        store
        if (e.target.closest("#stateA")) {
            store.dispatch(setA(Number(e.target.value)))
        }
        if (e.target.closest("#stateB")) {
            store.dispatch(setB(Number(e.target.value)))
        }
    });

    observe(this.render);
}