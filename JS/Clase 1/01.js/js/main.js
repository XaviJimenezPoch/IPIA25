let cont = 0;
const MAX_Cont = 10;

function incrementarContador() {
  if (cont < MAX_Cont) {
    cont++;
    console.log("Incrementado", cont);
  } else {
    print("Se ha alcanzado el maximo");
  }
}
incrementarContador();
