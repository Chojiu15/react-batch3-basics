import Image from './Image'

const Section = (props) => {
    console.log(props)
    return(
        <>
        {/* <h1>This is my section number {props.number}</h1>
        <h2>{props.text}</h2>
        <h2>{props.hello}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        {/* <img src={props.koala} alt='koala'/> */}
        {/* <Image img={props.img}/> */}
        <h1>Hello {props.text}</h1>
        </>
    )
}


export default Section