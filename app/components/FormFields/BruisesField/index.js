import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import bruises from '../../../images/bruises.jpg';


function BruisesField({ value, onChange }) {
  return (
    <div>
      <h3>Bruises</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="bruises" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="n">No</option>
            <option value="t">Have</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex' }}>
        <ImageAndName name={'Bruises'} image={bruises} height={100} width={100} />
      </div>
    </div>
  );
}

BruisesField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default BruisesField;
