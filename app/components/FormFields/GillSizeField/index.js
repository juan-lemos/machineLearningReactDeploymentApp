import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import GillSize from '../../../images/gillSize.png';

function GillSizeField({ value, onChange }) {
  return (
    <div>
      <h3>Gill Size</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="gillsize" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="n">Narrow</option>
            <option value="b">Broad</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'GillSize'} image={GillSize} height={300} width={300} />
      </div>
    </div>
  );
}

GillSizeField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default GillSizeField;
