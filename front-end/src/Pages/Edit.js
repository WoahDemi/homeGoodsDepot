import NewHomeForm from "../Components/NewHomeForm";

function Edit(){

    const header = {
        "textAlign": "center",
        backgroundColor: "#8ECAE6",
        padding: "10px"
      };

    return(<div>
        <h3 style={header}>edit home listing: </h3>
        <EditHomeForm />
        </div>)
}

export default Edit;