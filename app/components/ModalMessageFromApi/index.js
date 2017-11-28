import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Edible from '../../images/edible.jpg';
import Poisonous from '../../images/poisonous.png';


function ModalMessageFromApi({ edible, percentage, onClose }) {
  let precision = percentage;
  if (edible === 'e') {
    precision = 1 - percentage;
  }

  return (
    <Modal.Dialog>
      <Modal.Body>
        <div>
          {edible === 'e' ?
            <div >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img alt={'edible'} src={Edible} />
              </div>
              <h3 style={{ color: 'green', display: 'flex', justifyContent: 'center' }}> Edible !</h3>
            </div>
            :
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img alt={'Poisonous'} src={Poisonous} />
              </div>
              <h3 style={{ color: 'red', display: 'flex', justifyContent: 'center' }}> Poisonous !</h3>
            </div>
          }
          <h4>{`Probability: ${precision}`}</h4>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => onClose()}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog >
  );
}

ModalMessageFromApi.propTypes = {
  edible: PropTypes.string,
  percentage: PropTypes.number,
  onClose: PropTypes.func,
};

export default ModalMessageFromApi;
