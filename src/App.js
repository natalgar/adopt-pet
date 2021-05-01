// can destructure props
const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
    ]);
};

// create a component called App
// the component is just a function that returns React.createElement
// we've create a "rubber stamp" called App, not used yet
// stamps a div, then stamps an h1
const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet, {
                    name: 'Mundle',
                    animal: 'Dog',
                    breed: 'Corgi'
                }
            ),
            React.createElement(Pet, {
                name: 'Macy',
                animal: 'Cat',
                breed: 'Tabby'
            }),
            React.createElement(Pet, {
                name: 'Phoenix',
                animal: 'Bird',
                breed: 'Cockatiel'
            })
        ]
    );
};

ReactDOM.render(
    // takes a component
    // can put a component inside a component inside a component
    // composability model
    React.createElement(App), // can take in stamp I created or a string tag
    document.getElementById('root') // where to stamp
);

/* Create Element takes 3 params:
* 1 - the type of element (div, h1, composite component)
* 2 - attributes of the component
* 3 - the children, whatever children to pass into the element
*   - can be an array of children
*   - does not have to in an array (with variable arity), can just pass multiple children as params, it accepts any extra params
* */