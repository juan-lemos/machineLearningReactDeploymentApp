import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Well, Form, Button } from 'react-bootstrap';
import Title from 'components/Title';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import BruisesField from 'components/FormFields/BruisesField';
import OdorField from 'components/FormFields/OdorField';
import GillSizeField from 'components/FormFields/GillSizeField';
import GillColorField from 'components/FormFields/GillColorField';
import StalkSurfaceAboveRField from 'components/FormFields/StalkSurfaceAboveRField';
import StalkColorField from 'components/FormFields/StalkColorField';
import RingTypeField from 'components/FormFields/RingTypeField';
import SporePrintColorField from 'components/FormFields/SporePrintColorField';
import ModalMessageFromApi from 'components/ModalMessageFromApi';

import { makeSelectAzure, makeSelectAzureError, makeSelectAzureLoading } from './selectors';

import reducer from './reducer';
import { azureMl } from './actions';
import saga from './saga';

export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      values: {
        bruises: 'f',
        odor: 'n',
        gillsize: 'n',
        gillcolor: 'w',
        stalksurfaceabovering: 's',
        stalksurfacebelowring: 's',
        stalkcolorabovering: 'b',
        stalkcolorbelowring: 'b',
        ringtype: 'n',
        sporeprintcolor: 'b',
      },
      showModal: false,
    };
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.loadingAzure
      && nextProps.responseAzure != null
      && !this.state.showModal) {
      this.setState({ showModal: true });
    }
  }

  handleOnChangeValue(event) {
    const values = Object.assign({}, this.state.values);
    values[event.target.name] = event.target.value;
    this.setState({ values });
  }

  render() {
    return (
      <div>
        {this.state.showModal &&
          <ModalMessageFromApi
            edible={(this.props.responseAzure.Results.output1.value.Values)[0][0]}
            percentage={parseFloat((this.props.responseAzure.Results.output1.value.Values)[0][1])}
            onClose={() => this.setState({ showModal: false })}
          />
        }
        <Helmet>
          <title>Mushrooms</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <div style={{ paddingBottom: '100px' }}>
          <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <Title />
            <Well>
              <div>
                <Form horizontal>
                  <BruisesField value={this.state.values.bruises} onChange={(e) => this.handleOnChangeValue(e)} />
                  <OdorField value={this.state.values.odor} onChange={(e) => this.handleOnChangeValue(e)} />
                  <GillSizeField value={this.state.values.gillsize} onChange={(e) => this.handleOnChangeValue(e)} />
                  <GillColorField value={this.state.values.gillcolor} onChange={(e) => this.handleOnChangeValue(e)} />
                  <RingTypeField value={this.state.values.ringtype} onChange={(e) => this.handleOnChangeValue(e)} />
                  <StalkSurfaceAboveRField
                    value={this.state.values.stalksurfaceabovering}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalksurfaceabovering'}
                    title={'Stalk surface above ring'}
                  />
                  <StalkColorField
                    value={this.state.values.stalkcolorabovering}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalkcolorabovering'}
                    title={'Stalk color above ring'}
                  />
                  <StalkSurfaceAboveRField
                    value={this.state.values.stalksurfacebelowring}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalksurfacebelowring'}
                    title={'Stalk surface below ring'}
                  />
                  <StalkColorField
                    value={this.state.values.stalkcolorbelowring}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalkcolorbelowring'}
                    title={'Stalk color below ring'}
                  />
                  <SporePrintColorField value={this.state.values.sporeprintcolor} onChange={(e) => this.handleOnChangeValue(e)} />

                  <div style={{ marginTop: '20px', justifyContent: 'flex-end', display: 'flex' }}>
                    <Button bsStyle="primary" onClick={() => this.props.onAzureRequest(this.state.values)}>
                      {'Process'}
                    </Button>
                  </div>
                </Form>
              </div>
            </Well>
            <div style={{ color: 'gray', margin: 'auto', textAlign: 'center' }}>
              {'Images taken from Google images and https://www.slideshare.net/rayborg/mushroom-tutorial.'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onAzureRequest: PropTypes.func,
  loadingAzure: PropTypes.bool,
  responseAzure: PropTypes.object,
  errorLoadingAzure: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  responseAzure: makeSelectAzure(),
  errorLoadingAzure: makeSelectAzureError(),
  loadingAzure: makeSelectAzureLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAzureRequest: (evt) => {
      dispatch(azureMl(evt));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
