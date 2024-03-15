let menu, bebida;
menu = prompt("Menu de pizza: pepperoni, piña, salami")
switch (menu){
    case 'pepperoni':
        bebida = "¿Desea beber fanta?";
        break;
    case 'piña':
        bebida = "¿Desea beber pepsi?";
        break;
    case 'salami':
        bebida = "¿Desea coca cola?";
        break;
    default:
        bebida = "Elija pepperoni, piña, salami";
    }
alert(bebida);