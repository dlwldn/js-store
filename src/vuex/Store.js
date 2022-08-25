import { observable } from "../components/observer.js";

export default function Store({ state, mutations, actions }) {
    this._state;
    this._mutations;
    this._actions;

    this.state = {};

    this.init = () => {
        this._state = observable(state);
        this._mutations = mutations;
        this._actions = actions;

        Object.keys(state).forEach(key => {
            Object.defineProperty(this.state, key, {
                get: () => {
                    return this._state[key]
                }
            })
        })
    }

    this.commit = (action, payload) => {
        this._mutations[action](this._state, payload)
    }

    this.dispatch = (action, payload) => {
        return this._actions[action]({
            state: this._state,
            commit: this.commit,
            dispatch: this.dispatch
        }, payload)
    }


    this.init();
}