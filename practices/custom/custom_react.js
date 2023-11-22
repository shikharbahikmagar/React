const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'click me to open google'
}

function customRender(reactElement, container)
{
    const domELement = document.createElement(reactElement.type);
    domELement.innerHTML = reactElement.children
    // domELement.setAttribute('href', reactElement.props.href);
    // domELement.setAttribute('target', reactElement.props.target);
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domELement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domELement);
}

customRender(reactElement, mainContainer);