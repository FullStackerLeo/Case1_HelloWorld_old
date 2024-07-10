const Home = () => (
    <div className="Home">
        <h1>GUI is?</h1>
        <img src="/img/uifstate.png" alt="Italian Trulli" width = '500px'/>
        <p>State is a mutable data source used to store your data.</p>
        <h3>How to manage the shared state?</h3>
        <img src="/img/redux.gif" width='600px' alt="Italian Trulli" />
        <h5>React Buit-in</h5>
        <ul>
            <li>React Context</li>
            <h5>React Hooks</h5>
            <li>useState</li>
            <li>useReducer</li>
        </ul>
        <h5>Third Party</h5>
        <ul>
            <li>Redux</li>
            <li>Zustand</li>
            <li>MobX</li>
            <li>...</li>
        </ul>

    </div>
)
export default Home