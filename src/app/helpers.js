'use client';

import Swal from 'sweetalert2';

function swalAlert(
  title,
  text,
  icon,
  timer,
  showDenyButton,
  showCancelButton,
  confirmButtonText,
  denyButtonText,
) {
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
}

function getNameOfStudy(name) {
  return name;
}

export function createVisits(studies) {
  return studies.reduce((acc, study) => {
    const dateOnly = study.date.split('T')[0];
    let group = acc.find((g) => g.date === dateOnly);
    if (!group) {
      group = { date: dateOnly, studies: [] };
      acc.push(group);
    }
    group.studies.push(study);
    return acc;
  }, []);
}

export { swalAlert, getNameOfStudy };
