import React from 'react'
import '../index.scss'
import Modal from 'react-modal';
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

function Sidebar() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a>Brand<b>Colors</b></a>
                </div>
                <div className="description">
                    The biggest collection of offical brand color codes around. Curated by @brandcolors and friends.
        </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen} //isOpen açık olup olmadığını kontrol edecek.
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">
                <button className="modal-close-btn" onClick={toggleModal}><GrClose /></button>
                <h3>About BrandColors</h3>
                <p>
                The biggest collection of offical brand color codes around. Curated by @brandcolors and friends.
                </p>
                <p>
                The biggest collection of offical brand color codes around. Curated by @brandcolors and friends.
                </p>
            </Modal>
        </>
    )
}

export default Sidebar
