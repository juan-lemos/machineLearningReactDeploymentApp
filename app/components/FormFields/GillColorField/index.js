import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import White from '../../../images/colors/white.png';
import Black from '../../../images/colors/black.png';
import Brown from '../../../images/colors/brown.jpg';
import Buff from '../../../images/colors/buff.png';
import Chocolate from '../../../images/colors/chocolate.jpg';
import Gray from '../../../images/colors/gray.jpg';
import Green from '../../../images/colors/green.png';
import Orange from '../../../images/colors/orange.png';
import Pink from '../../../images/colors/pink.png';
import Purple from '../../../images/colors/purple.png';
import Red from '../../../images/colors/red.png';
import Yellow from '../../../images/colors/yellow.png';

function GillSizeField({ value, onChange }) {
  return (
    <div>
      <h3>Gill Color</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="gillcolor" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="w">White</option>
            <option value="k">Black</option>
            <option value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="h">Chocolate</option>
            <option value="g">Gray</option>
            <option value="r">Green</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="u">Purple</option>
            <option value="e">Red</option>
            <option value="y">Yellow</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'White'} image={White} height={50} width={50} />
        <ImageAndName name={'Black'} image={Black} height={50} width={50} />
        <ImageAndName name={'Brown'} image={Brown} height={50} width={50} />
        <ImageAndName name={'Buff'} image={Buff} height={50} width={50} />
        <ImageAndName name={'Choco...'} image={Chocolate} height={50} width={50} />
        <ImageAndName name={'Gray'} image={Gray} height={50} width={50} />
        <ImageAndName name={'Green'} image={Green} height={50} width={50} />
        <ImageAndName name={'Orange'} image={Orange} height={50} width={50} />
        <ImageAndName name={'Pink'} image={Pink} height={50} width={50} />
        <ImageAndName name={'Purple'} image={Purple} height={50} width={50} />
        <ImageAndName name={'Red'} image={Red} height={50} width={50} />
        <ImageAndName name={'Yellow'} image={Yellow} height={50} width={50} />
      </div>
    </div>
  );
}

GillSizeField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default GillSizeField;
