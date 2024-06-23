'use client';

import Swal from 'sweetalert2';

const swalAlert = ({
  title, text, icon, timer, showDenyButton,
  showCancelButton,
  confirmButtonText,
  denyButtonText,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    timer,
    showDenyButton,
    showCancelButton,
    confirmButtonText,
    denyButtonText,
  });
};

function getNameOfStudy(name) {
  return name;
}

export { swalAlert, getNameOfStudy };
