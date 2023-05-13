import Swal from "sweetalert2";
const sweetSuccess = (message) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const sweetError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error...",
    text: `${message}`,
  });
};

// delete permission
const sweetDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  })
};

export { sweetError, sweetSuccess ,sweetDelete };
