"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleModal = simpleModal;
exports.toast = toast;
exports.emailValidation = emailValidation;

function simpleModal(
  modalContent,
  modalType,
  callback,
  acceptText,
  cancelText
) {
  if (arguments[0] === undefined) {
    console.error("[MODAL] I don't have 'modalContent'.");
  } else {
    if (arguments[1] === undefined) {
      console.error("[MODAL] I don't have 'modalType'.");
    } else {
      if (arguments[1] !== "normal" && arguments[1] !== "confirmation") {
        console.error(
          "[MODAL] The modal type '" + modalType + "' doesn't exists!"
        );
      } else {
        var modalOverlay = document.createElement("div");
        modalOverlay.id = "cs-modal-overlay";
        var modalContainer = document.createElement("div");
        modalContainer.id = "cs-modal-container";
        var buttonsContainer = document.createElement("div");
        buttonsContainer.id = "cs-modal-buttons-container";
        var buttonAccept = document.createElement("button");
        buttonAccept.className = "cs-modal-button accept";
        buttonAccept.innerHTML = acceptText ? acceptText : "OK";
        var generatedModalContent = "";

        switch (modalType) {
          case "normal":
            generatedModalContent = document.createElement("p");
            generatedModalContent.innerHTML = modalContent;
            buttonAccept.addEventListener("click", function() {
              modalOverlay.className = "exit";
              setTimeout(function() {
                document.body.removeChild(modalOverlay);

                if (callback) {
                  callback();
                }
              }, 300);
            });
            buttonsContainer.appendChild(buttonAccept);
            generatedModalContent.appendChild(buttonsContainer);
            break;

          case "confirmation":
            if (modalType === "confirmation" && !callback) {
              console.error(
                "[MODAL] I don't have a callback for the 'accept' button."
              );
            } else {
              generatedModalContent = document.createElement("div");
              var cont = document.createElement("p");
              cont.innerHTML = modalContent;

              if (modalType === "confirmation") {
                buttonAccept.addEventListener("click", function() {
                  callback();
                  modalOverlay.className = "exit";
                  setTimeout(function() {
                    document.body.removeChild(modalOverlay);
                  }, 300);
                });
              } else {
                buttonAccept.addEventListener("click", function() {
                  modalOverlay.className = "exit";
                  setTimeout(function() {
                    document.body.removeChild(modalOverlay);
                  }, 300);
                });
              }

              buttonsContainer.appendChild(buttonAccept);

              if (modalType === "confirmation") {
                var btnCancelar = document.createElement("button");
                btnCancelar.className = "cs-modal-button cancel";
                btnCancelar.innerHTML = cancelText ? cancelText : "Cancel";
                btnCancelar.addEventListener("click", function() {
                  if (modalOverlay.offsetParent === null) {
                    modalOverlay.className = "exit";
                    setTimeout(function() {
                      document.body.removeChild(modalOverlay);
                    }, 300);
                  }
                });
                buttonsContainer.appendChild(btnCancelar);
              }

              generatedModalContent.appendChild(cont);
              generatedModalContent.appendChild(buttonsContainer);
            }

            break;

          default:
            break;
        }

        modalContainer.appendChild(generatedModalContent);
        modalOverlay.appendChild(modalContainer);
        document.body.appendChild(modalOverlay);
      }
    }
  }
}

function toast(text) {
  var toasters = document.getElementsByClassName("cs-toast-container");

  if (toasters.length > 0) {
    for (var i = 0; i < toasters.length; i++) {
      toasters[i].remove();
    }
  }

  var toastContainerClass = "cs-toast-container";
  var container = document.createElement("div");
  container.className = toastContainerClass;
  var p = document.createElement("p");
  p.innerHTML = text;
  container.appendChild(p);
  document.body.appendChild(container);
  var duration = 60000 * (text.split(" ").length / 200);
  duration = duration < 4000 ? 4000 : duration;
  setTimeout(function() {
    container.className = toastContainerClass + " show";
  }, 10);
  setTimeout(function() {
    container.className = toastContainerClass;
  }, duration + 10);
  setTimeout(function() {
    container.remove();
  }, duration + 210);
}

function emailValidation(value) {
  var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(value);
}
