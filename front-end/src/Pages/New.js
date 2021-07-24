import NewHomeForm from "../Components/NewHomeForm";

function New(){

    const header = {
        "textAlign": "center",
        backgroundColor: "yellow",
        padding: "10px"
      };

    return(<div>
        <h3 style={header}>Enter a listing for a new home: </h3>
        <NewHomeForm />
        </div>)
}

export default New;