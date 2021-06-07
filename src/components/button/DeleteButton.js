import { DeleteButtonStyled } from "../../styles";

// const DeleteButton = (props) => {
//   const handleDelete = () => {
//     props.deleteProduct(props.product.id);
//     props.setProduct(null);
//   };
//   return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
// };

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={() => props.deleteProduct(props.product.id)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;





