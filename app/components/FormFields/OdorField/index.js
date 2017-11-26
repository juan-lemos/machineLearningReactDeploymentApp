import React from 'react';
import ProptTypes from 'prop-types';
import { FormControl, FormGroup } from 'react-bootstrap';
import ImageAndName from 'components/ImageAndName';
import almond from '../../../images/odor/almond.jpg';
import anise from '../../../images/odor/anise.jpg';
import creosote from '../../../images/odor/creosote.jpg';
import fishy from '../../../images/odor/fishy.jpg';
import foul from '../../../images/odor/foul.png';
import musty from '../../../images/odor/musty.jpg';
import pungent from '../../../images/odor/pungent.jpg';
import spicy from '../../../images/odor/spicy.jpg';


function OdorField({ value, onChange }) {
  return (
    <div>
      <h3>Odor</h3>
      <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <FormGroup controlId="formControlsSelect">
          <FormControl value={value} name="odor" componentClass="select" placeholder="select" onChange={onChange}>
            <option value="n">None</option>
            <option value="a">Almond</option>
            <option value="l">Anise</option>
            <option value="c">Creosote</option>
            <option value="y">Fishy</option>
            <option value="f">Foul</option>
            <option value="m">Musty</option>
            <option value="p">Pungent</option>
            <option value="s">Spicy</option>
          </FormControl>
        </FormGroup>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ImageAndName name={'Almond'} image={almond} height={100} width={100} />
        <ImageAndName name={'Anise'} image={anise} height={100} width={100} />
        <ImageAndName name={'Creosote'} image={creosote} height={100} width={100} />
        <ImageAndName name={'Fishy'} image={fishy} height={100} width={100} />
        <ImageAndName name={'Foul'} image={foul} height={100} width={100} />
        <ImageAndName name={'Musty'} image={musty} height={100} width={100} />
        <ImageAndName name={'Pungent'} image={pungent} height={100} width={100} />
        <ImageAndName name={'Spicy'} image={spicy} height={100} width={100} />
      </div>
    </div>
  );
}

OdorField.propTypes = {
  value: ProptTypes.string,
  onChange: ProptTypes.func,
};

export default OdorField;
