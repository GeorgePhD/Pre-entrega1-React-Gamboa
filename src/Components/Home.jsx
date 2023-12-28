import image from '/assets/cafer-1.png';


const Home = () => {
    return (
        <>
        <h1 className='title'>Bienvenidos a nuestra tienda de café...</h1>
        <img className='products-img' src={image} />
        </>
    )
}

export default Home