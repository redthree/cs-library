import React, { PureComponent } from "react";

// import Button from '../../controls/Button';

import "./styles.scss";

class Modal extends PureComponent {
  componentDidMount() {
    const { showModal } = this.props;
    return showModal ? (document.body.style.overflow = "hidden") : null;
  }

  componentDidUpdate(prevProps) {
    const { showModal } = this.props;

    if (prevProps.showModal && !showModal) {
      document.body.style.overflow = "auto";
    }
  }

  render() {
    const {
      children,
      headerLeft,
      headerTitle,
      headerRight,
      showModalHeader = true,
      showModal,
      // hideCloseButton,
      outsideClickCallback
    } = this.props;

    return showModal ? (
      <div className="cs-modal-overall-container">
        <div className="cs-modal-overlay" onClick={outsideClickCallback}>
          <div className="cs-modal-container">
            {showModalHeader ? (
              <div className="cs-modal-header">
                {headerLeft ? (
                  <div className="cs-modal-header-left">{headerLeft}</div>
                ) : null}
                {headerTitle ? (
                  <h3 className="cs-modal-header-title">{headerTitle}</h3>
                ) : null}
                <div className="cs-modal-header-right">
                  {headerRight ? headerRight : null}
                </div>
              </div>
            ) : null}

            <div className="cs-modal-content">{children}</div>

            <div className="cs-modal-footer"></div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
