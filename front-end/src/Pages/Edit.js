import EditHomeForm from "../Components/EditHomeForm";

function Edit(){

    const header = {
        "textAlign": "center",
        backgroundColor: "#82c8e8",
        padding: "10px"
      };

    return(<div>
        <h3 style={header}>Edit home listing: </h3>
        <EditHomeForm />
        </div>)
}

export default Edit;