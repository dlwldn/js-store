export default function List({ $target, initialState, onClick }) {
    const $component = document.createElement('ul');
    $target.appendChild($component);
    this.state = initialState;

    this.render = () => {
        if(this.state) {
            $component.innerHTML = `
                ${this.state.list.map(item => `
                    <li>${item}</li>
                `).join('')}

                <button class='add'>추가</button>
            `
        }
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        } 
        this.render();
    }

    $component.addEventListener('click', (e) => {
        if(e.target.closest('.add')) {
            onClick();
        }
    })

    this.render();
}