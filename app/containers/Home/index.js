import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Well, Form, Button } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';
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
    };
  }


  componentWillMount() {
    // this.props.onAzureRequest(
    //   {
    //     bruises: 't',
    //     odor: 'p',
    //     gillsize: 'n',
    //     gillcolor: 'k',
    //     stalksurfaceabovering: 's',
    //     stalksurfacebelowring: 's',
    //     stalkcolorabovering: 'w',
    //     stalkcolorbelowring: 'w',
    //     ringtype: 'p',
    //     sporeprintcolor: 'k',
    //   }
    // );
  }

  componentWillReceiveProps(nextProps) {
    // if (!nextProps.loadingAzure && nextProps.responseAzure != null) {
    //   console.log(nextProps.responseAzure);
    // }
  }

  handleOnChangeValue(event) {
    const values = Object.assign({}, this.state.values);
    values[event.target.name] = event.target.value;
    this.setState({ values });
  }

  render() {
    // let bodyRender;
    // if (this.props.loadingAzure) {
    //   bodyRender = <LoadingIndicator />;
    // } else if (this.props.errorLoadingAzure) {
    //   bodyRender = <div>Error!</div>;
    // } else if (this.props.responseAzure != null) {
    //   bodyRender = (
    //     <div>
    //     </div>
    //   );
    // }

    return (
      <div>
        <Helmet>
          <title>Mushrooms</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <div style={{ paddingBottom: '100px' }}>
          {this.props.loadingAzure && <LoadingIndicator />}
          <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <Title />
            <Well>
              <div>
                <Form horizontal>
                  <BruisesField value={this.state.values.bruises} onChange={(e) => this.handleOnChangeValue(e)} />
                  <OdorField value={this.state.values.odor} onChange={(e) => this.handleOnChangeValue(e)} />
                  <GillSizeField value={this.state.values.gillsize} onChange={(e) => this.handleOnChangeValue(e)} />
                  <GillColorField value={this.state.values.gillcolor} onChange={(e) => this.handleOnChangeValue(e)} />
                  <StalkSurfaceAboveRField
                    value={this.state.values.stalksurfaceabovering}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalksurfaceabovering'}
                    title={'Stalk surface above ring'}
                  />
                  <StalkSurfaceAboveRField
                    value={this.state.values.stalksurfacebelowring}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalksurfacebelowring'}
                    title={'Stalk surface below ring'}
                  />
                  <StalkColorField
                    value={this.state.values.stalkcolorabovering}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalkcolorabovering'}
                    title={'Stalk color above ring'}
                  />
                  <StalkColorField
                    value={this.state.values.stalkcolorbelowring}
                    onChange={(e) => this.handleOnChangeValue(e)}
                    name={'stalkcolorbelowring'}
                    title={'Stalk color below ring'}
                  />
                  <RingTypeField value={this.state.values.ringtype} onChange={(e) => this.handleOnChangeValue(e)} />
                  <SporePrintColorField value={this.state.values.sporeprintcolor} onChange={(e) => this.handleOnChangeValue(e)} />

                  <div style={{ marginTop: '20px', justifyContent: 'flex-end', display: 'flex' }}>
                    <Button bsStyle="primary">
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
