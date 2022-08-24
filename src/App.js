import { observable, observe } from "./components/observer.js";

export default function App({ $target }) {
    const state = observable({
        a: 10,
        b: 20
    })

    this.render = () => {
        $target.innerHTML = `
            <p>a + b = ${state.a + state.b}</p>
            <input id="stateA" value="${state.a}" />
            <input id="stateB" value="${state.b}" />
        `
    }

    $target.addEventListener('change', (e) => {
        if(e.target.closest('#stateA')) {
            state.a = Number(e.target.value);
            return;
        }
        if(e.target.closest('#stateB')) {
            state.b = Number(e.target.value);
            return;
        }
    })

    observe(this.render)

    // this.state = {
    //     list: LIST
    // }

    // this.setState = (nextState) => {
    //     this.state = {
    //         ...this.state,
    //         ...nextState
    //     }
    //     ListComponent.setState({
    //         list: this.state.list
    //     })
    // }

    // const ListComponent = new List({
    //     $target,
    //     initialState: {
    //         list: this.state.list
    //     },
    //     onClick: () => {
    //         this.setState({
    //             list: [...this.state.list, `item${this.state.list.length + 1}`]
    //         })
    //     }
    // })
}