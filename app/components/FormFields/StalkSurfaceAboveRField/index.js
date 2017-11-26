import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import Fibrous from '../../../images/stalk_surface/fibrous.png';
import Scaly from '../../../images/stalk_surface/scaly.png';
import Silky from '../../../images/stalk_surface/silky.png';
import Smooth from '../../../images/stalk_surface/smooth.png';


function StalkSurfaceAboveRField({ value, onChange, title, name }) {
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name={name} componentClass="select" placeholder="select" onChange={onChange}>
            <option value="s">Smooth</option>
            <option value="f">Fibrous</option>
            <option value="y">Scaly</option>
            <option value="k">Silky</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'Smooth'} image={Smooth} height={100} width={100} />
        <ImageAndName name={'Fibrous'} image={Fibrous} height={100} width={100} />
        <ImageAndName name={'Scaly'} image={Scaly} height={100} width={100} />
        <ImageAndName name={'Silky'} image={Silky} height={100} width={100} />
      </div>
    </div>
  );
}

StalkSurfaceAboveRField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
  title: ProptTypes.string,
  name: ProptTypes.string,
};

export default StalkSurfaceAboveRField;
