'use client';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swalAlert = ({
  title, text, icon, timer, showDenyButton,
  showCancelButton,
  confirmButtonText,
  denyButtonText,
}) => {
  withReactContent(Swal).fire({
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
