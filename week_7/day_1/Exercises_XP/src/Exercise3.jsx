import './Exercise.css'

const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

const list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


const Exercise3 = ()=>{
    return <>
        <h1 style={styleHeader}>Styled Header</h1>
        <p className='para'>paragraph text</p>
        <a href="https://www.example.com">This is a link</a>
        <form action="">This the form</form>
        <div> image tag<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png" alt="" /></div>
        <ol>{list.map((li,index)=><li key={index}>{li}</li>)}</ol>
    </>
}

export default Exercise3