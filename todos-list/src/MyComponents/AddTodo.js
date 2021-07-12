import React,{useState} from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [Desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(title==="" || Desc==="")
        {
            alert("Fill the form properly")
        }
        props.addTodo(title,Desc);
    };
    return (
        <>
        <h3 className="text-center">Add a Todo</h3>
        <div className="container my-3">
        <form onSubmit={submit}>
<div className="form-group">
<label htmlFor="exampleInputEmail1">Title</label>
<input type="text" className="form-control" value={title} onChange={(e)=>{
settitle(e.target.value)
}} id="title" />

</div>
<div className="form-group">
<label>Description</label>
<input type="text" value={Desc} onChange={(e)=>{
    setDesc(e.target.value)
    }}className="form-control" id="desc" />
</div>
<button type="submit" className="btn btn-success">Add</button>
</form>    </div>
        </>
    )
}
