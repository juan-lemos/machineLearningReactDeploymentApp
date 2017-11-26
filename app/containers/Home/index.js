import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Well, Form, FormGroup, FormControl, Image } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';
import Title from 'components/Title';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAzure, makeSelectAzureError, makeSelectAzureLoading } from './selectors';

import image1 from '../../images/gillSize.png';
import reducer from './reducer';
import { azureMl } from './actions';
import saga from './saga';


export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
          <title>Hongos</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        {this.props.loadingAzure && <LoadingIndicator />}
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <Title />
          <Well>
            <div>
              <Form horizontal>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
                <button>
                  <Image src={image1} style={{ height: '100px', width: '100px' }} circle />
                </button>
              </Form>
            </div>
          </Well>
        </div>
      </div >
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
