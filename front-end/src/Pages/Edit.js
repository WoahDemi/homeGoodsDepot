import EditHomeForm from "../Components/EditHomeForm";

function Edit(){

    const header = {
        "textAlign": "center",
        backgroundColor: "#8ECAE6",
        padding: "10px"
      };

    return(<div>
        <h3 style={header}>Edit home listing: </h3>
        <EditHomeForm />
        </div>)
}

export default Edit;