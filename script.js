function resultado(){
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let tamaño = document.getElementById("tamaño").value;

    document.getElementById("mostrar").textContent = "Ha escogido el modelo " + modelo + 
                                                     ". Color "+ color + " y tamaño " + tamaño + ".";
}