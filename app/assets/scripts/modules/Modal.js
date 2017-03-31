import $ from 'jquery';


class Modal{
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(){
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;
    //we need to include this return because the get in touch btn is an anchor elem, with a href and default behaviour, this will prevent it
  }
  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
