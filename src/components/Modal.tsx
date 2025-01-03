import React from 'react'
import { IModalProps } from '../interfaces/Components'
import '../styles/components/Modal.scss'

export const Modal: React.FunctionComponent<IModalProps> = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
