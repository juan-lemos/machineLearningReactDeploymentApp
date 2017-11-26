import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import Spore from '../../../images/spore.jpg';
import White from '../../../images/colors/white.png';
import Black from '../../../images/colors/black.png';
import Brown from '../../../images/colors/brown.jpg';
import Buff from '../../../images/colors/buff.png';
import Chocolate from '../../../images/colors/chocolate.jpg';
import Green from '../../../images/colors/green.png';
import Orange from '../../../images/colors/orange.png';
import Purple from '../../../images/colors/purple.png';
import Yellow from '../../../images/colors/yellow.png';

function SporePrintColorField({ value, onChange }) {
  return (
    <div>
      <h3>Spore print color</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="sporeprintcolor" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="b">Buff</option>
            <option value="k">Black</option>
            <option value="n">Brown</option>
            <option value="h">Chocolate</option>
            <option value="r">Green</option>
            <option value="o">Orange</option>
            <option value="u">Purple</option>
            <option value="w">White</option>
            <option value="y">yellow</option>
          </FormControl>
        </FormGroup>
      </div>
      <div>
        <ImageAndName name={'Spore'} image={Spore} height={100} width={100} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'Buff'} image={Buff} height={50} width={50} />
        <ImageAndName name={'Black'} image={Black} height={50} width={50} />
        <ImageAndName name={'Brown'} image={Brown} height={50} width={50} />
        <ImageAndName name={'Choco...'} image={Chocolate} height={50} width={50} />
        <ImageAndName name={'Green'} image={Green} height={50} width={50} />
        <ImageAndName name={'Orange'} image={Orange} height={50} width={50} />
        <ImageAndName name={'Purple'} image={Purple} height={50} width={50} />
        <ImageAndName name={'White'} image={White} height={50} width={50} />
        <ImageAndName name={'Yellow'} image={Yellow} height={50} width={50} />
      </div>
    </div>
  );
}

SporePrintColorField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default SporePrintColorField;
