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

export { sweetError, sweetSuccess };
