import Todo from './components/Todo';

function App() {
    return (  
        <div>
            <h1>Ambe's Todo List</h1>
            <Todo text='Wake up at 6:00AM'/>                {/*including the component*/}
            <h3>My second Todo just by reusing the component</h3>
            <Todo text='Pray at 6:05AM'/>               {/*use props in Todo.js for this text to work*/}
            <h3>My third Todo just by reusing the component</h3>
            <Todo text='Take my bath at 6:45AM'/>
        </div>
    );
}

export default App;