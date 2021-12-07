


const Image = (props) => {
    console.log(props)
    return(
        <>
            <h1>This is my Image component</h1>
            <img src={props.img} />
        </>
    )
}

export default Image