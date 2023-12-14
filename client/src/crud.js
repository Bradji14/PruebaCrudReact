import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
const Crud=({user,userName})=>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [usersAll, setUsersAll] = useState([]);
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState("");
  
    useEffect(() => {
      getUsers();
    }, []);
  
    //añadir usuario
    const addUser = () => {
      // en los objetos se le pasan los datos que recibira la peticion (ver en index.js de node)
      axios
        .post("http://localhost:3001/createUsers", {
          name: name,
          age: age,
          country: country,
          position: position,
        })
        .then((response) => {
          console.log(response);
          cleanInputs();
          getUsers();
        });
    };
  
    //Obtener usuarios
    const getUsers = () => {
      axios.get("http://localhost:3001/getUsers").then((response) => {
        setUsersAll(response.data);
        // console.log(response.data);
      });
    };
  
    // actualizar usuarios
    const updateUsers = () => {
      // en los objetos del axios se le pasan los datos que recibira la peticion (ver en index.js de node)
      axios
        .put("http://localhost:3001/updateUsers", {
          id: id,
          name: name,
          age: age,
          country: country,
          position: position,
        })
        .then((response) => {
          console.log(response);
          getUsers();
          cleanInputs();
        });
    };
  
    // ELMINAR usuarios
    const deleteUsers = (data) => {
  
      Swal.fire({
        icon: "warning",
        title: "<strong>Elminar</strog>",
        html: `<p>Deseas Elminar a ${data.name} ? </p>`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si, elimiar",
        denyButtonText: `No eliminar`,
      }).then((result) => {
        if (result.isConfirmed) { 
  
          axios.delete(`http://localhost:3001/deleteUsers/${data.id}`).then(() => {
            getUsers();
          });
      
          Swal.fire("Eliminado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Eliminacion cancelada", "", "info");
        }
      }) .catch(function(error){
  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo eliminar',
          footer: error
        })
  
      });
  
      
    };
  
    const updateInp = (x) => {
      setUpdate(true);
  
      setName(x.name);
      setAge(x.age);
      setCountry(x.country);
      setPosition(x.position);
      setId(x.id);
    };
  
    const cleanInputs = () => {
      setUpdate(false);
  
      setName("");
      setAge("");
      setCountry("");
      setPosition("");
      setId("");
    };
  
    return (
      <div className="container">
        <div className="card text-center">
          <div className="d-flex justify-content-between p-3">
          <h3>Bienvenido: {user}</h3>
          <button className="btn btn-danger" onClick={()=>{userName([])}}> Salir </button>

          </div>
            
          <div className="card-header">Gestión de empleados</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={name ?? ""}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Edad:
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Edad"
                value={age ?? ""}
                required
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                País:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Pais"
                value={country ?? ""}
                required
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Cargo:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Cargo"
                value={position ?? ""}
                required
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="card-footer text-muted">
            {update ? (
              <div>
                <button className="btn btn-warning" onClick={updateUsers}>
                  {" "}
                  Actualizar
                </button>
                <button className="btn btn-danger" onClick={cleanInputs}>
                  {" "}
                  Cancelar
                </button>
              </div>
            ) : (
              <button className="btn btn-success" onClick={addUser}>Registrar</button>
            )}
          </div>
        </div>
  
  
        {/* //mostrado de los clientes */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">country</th>
              <th scope="col">position</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usersAll.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{u.country}</td>
                  <td>{u.position}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          updateInp(u);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteUsers(u);
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default Crud