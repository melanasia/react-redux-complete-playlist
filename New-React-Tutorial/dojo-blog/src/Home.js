const Home = () => {

    const handleClick = (e) => {
        console.log('hello', e);
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);

    }

    return ( 
        <div className="class">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;