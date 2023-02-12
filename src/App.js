function App(){

    const handleClick = () => {
        console.log('Button was clicked!');
    }

    return <div>
        <button onClick={handleClick}>Add an Animal</button>
    </div>
}

export default App;