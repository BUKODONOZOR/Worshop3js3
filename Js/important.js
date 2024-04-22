


const GetEvents = (url) => {
    
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })

        .catch(function(error) {
            // Si ocurre un error, podemos manejarlo aquí o lanzarlo nuevamente
            throw error;
        });
}

const PostEvent = () => {
    url = "http://localhost:3000/actividades";
    var NameEvent = prompt("Enter el nombre del evento");
    var DateEvent = new Date();
    var DescriptionEvent = prompt("Descripe el evento");

    let NewEvent = {
        name: NameEvent,
        date: DateEvent,
        descriptions: DescriptionEvent

    }

    axios.post(url, NewEvent)
        .then(function (response) {
            console.log("Se enviaron los datos");
        }
        .catch(function (error) {
                console.log("Se papeo");
            }
        )
    )





}


const PatchEvent = ()=>{
    let Id = prompt("Ingresa el Id del evento a cambiar")
    url = "http://localhost:3000/actividades";
    urlandId =`http://localhost:3000/actividades/${Id}`;;
    let basededatos;
    GetEvents(url).then(function(resultado) {
        // Manejar el resultado obtenido de la función
        basededatos =resultado
        
        basededatos.forEach(element => {
            if(element.id == Id ){ 
                
                var ChangeName = prompt("El nuevo nombre");
                var ChangeDescription = prompt("La nueva description");

                var EvenChange = 
                {
                    name: ChangeName,
                    descriptions: ChangeDescription
                }

                axios.patch(urlandId, EvenChange)
                    .then(response => {
                        console.log('Datos actualizados:', response.data);
                        })
                        .catch(error => {
                        console.error('Hubo un problema al actualizar los datos:', error);
                        });
                

            }
        });
    })
    .catch(function(error) {
        // Manejar errores que puedan ocurrir al llamar a la función
        console.error('Ocurrió un error:', error);
    });

    


}


const DeleteEvent = () =>{
    var Idelement = prompt("Escriba la id del elemento que va a deletear")
    axios.delete(`http://localhost:3000/actividades/${Idelement}`)
    .then(function (response) {
        console.log('Recurso eliminado exitosamente');
    })
    .catch(function (error) {
        console.error('Error al intentar eliminar el recurso:', error);
    });
}



