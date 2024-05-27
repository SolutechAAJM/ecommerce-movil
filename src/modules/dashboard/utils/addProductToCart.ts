import { getStorageData } from "../../common/localstorage";
import { DashServices } from './Request';

export const AddItemToCartItem = async (productId: number, quantity: number) => {
  let idUser: any = await getStorageData("iduser");

  if (idUser == null) {
    alert("Debe loguearse en la aplicación");
    return;
  }

  idUser = parseInt(idUser);

  let data = {
    shoppingCartId: 1,
    productId: productId,
    quantity: quantity,
    iduser: idUser
  };

  DashServices.addProductToCart(data)
    .then(response => {
      if (response.data.status === 201) {
        alert("Se añadió el producto con éxito");
      } else {
        alert("Error añadiendo al carrito");
      }
    })
    .catch(error => {
      alert(error.message);
    });
};
