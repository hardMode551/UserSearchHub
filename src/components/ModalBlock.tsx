import React from 'react'

import { EmployeesTypes } from '../store/types/employessTypes'

import styles from '../styles/Modal.module.scss'


interface ModalBlockProps {
  selectedEmployee: EmployeesTypes | null
  closePopup: () => void
}

const ModalBlock: React.FC<ModalBlockProps> = ({ selectedEmployee, closePopup }) => {
  return (
    <div className={styles.root}>
      {selectedEmployee && (
        <div className={styles.modalOverlay} onClick={closePopup}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedEmployee.name}</h2>
              <svg
                onClick={closePopup}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className={styles.modalBody}>
              <table>
                <tbody>
                  <tr>
                    <td>Телефон:</td>
                    <td><label htmlFor="phone">{selectedEmployee.phone}</label></td>
                  </tr>
                  <tr>
                    <td>Почта:</td>
                    <td><label htmlFor="email">{selectedEmployee.email}</label></td>
                  </tr>
                  <tr>
                    <td>Дата приема:</td>
                    <td><label htmlFor="phone">{selectedEmployee.hire_date}</label></td>
                  </tr>
                  <tr>
                    <td>Должность:</td>
                    <td><label htmlFor="">{selectedEmployee.position_name}</label></td>
                  </tr>
                  <tr>
                    <th>Подразделение:</th>
                    <td className={styles.problem}><label htmlFor="">{selectedEmployee.department}</label></td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className={styles.modalFooter}>
              <h3>Дополнительная информация:</h3>
              <p>
                Разработчики используют текст в качестве заполнителя макта
                страницы. Разработчики используют текст в качестве заполнителя макета страницы.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalBlock