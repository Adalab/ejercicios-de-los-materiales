import adalabLogo from '../images/adalab-logo.png';
import '../styles/components/ComposeModal.scss';

const ComposeModal = props => {
  const handleToggleCompose = () => {
    props.handleToggleCompose();
  };

  const handleComposeText = ev => {
    props.handleComposeText(ev.target.value);
  };

  const handleComposeSubmit = ev => {
    ev.preventDefault();
    props.handleComposeSubmit();
  };

  const isButtonDisabled = props.composeText.length === 0;

  return (
    <div className="compose__modal-overlay">
      <form onSubmit={handleComposeSubmit}>
        <div className="compose__modal-wrapper">
          <div className="compose__modal-header">
            <button className="compose__modal-close-btn" onClick={handleToggleCompose}>
              Cerrar
            </button>
          </div>
          <div className="compose__modal-content">
            <img className="compose__profile-logo" src={adalabLogo} alt="Logo de Adalab" />
            <textarea
              className="compose__profile-textarea"
              placeholder="¿Qué está pasando?"
              value={props.composeText}
              onChange={handleComposeText}
            />
          </div>
          <div className="compose__modal-footer">
            <button className="compose__modal-tweet-btn" disabled={isButtonDisabled}>
              Twittear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComposeModal;
