import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import White from '../../../images/colors/white.png';
import Brown from '../../../images/colors/brown.jpg';
import Buff from '../../../images/colors/buff.png';
import Gray from '../../../images/colors/gray.jpg';
import Orange from '../../../images/colors/orange.png';
import Pink from '../../../images/colors/pink.png';
import Red from '../../../images/colors/red.png';
import Yellow from '../../../images/colors/yellow.png';
import Cinnamon from '../../../images/colors/cinnamon.png';

function GillSizeField({ value, onChange, title, name }) {
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name={name} componentClass="select" placeholder="select" onChange={onChange}>
            <option value="b">Buff</option>
            <option value="n">Brown</option>
            <option value="c">Cinnamon</option>
            <option value="g">Gray</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="e">Red</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        <ImageAndName name={'Buff'} image={Buff} height={50} width={50} />
        <ImageAndName name={'Brown'} image={Brown} height={50} width={50} />
        <ImageAndName name={'Cinnamon'} image={Cinnamon} height={50} width={50} />
        <ImageAndName name={'Gray'} image={Gray} height={50} width={50} />
        <ImageAndName name={'Orange'} image={Orange} height={50} width={50} />
        <ImageAndName name={'Pink'} image={Pink} height={50} width={50} />
        <ImageAndName name={'Red'} image={Red} height={50} width={50} />
        <ImageAndName name={'White'} image={White} height={50} width={50} />
        <ImageAndName name={'Yellow'} image={Yellow} height={50} width={50} />
      </div>
    </div>
  );
}

GillSizeField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
  title: ProptTypes.string,
  name: ProptTypes.string,
};

export default GillSizeField;
