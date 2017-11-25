import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAzure, makeSelectAzureError, makeSelectAzureLoading } from './selectors';
import reducer from './reducer';
import { azureMl } from './actions';
import saga from './saga';

export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.onAzureRequest(
      {
        Inputs: {
          input1: {
            ColumnNames: [
              'class',
              'bruises',
              'odor',
              'gill-size',
              'gill-color',
              'stalk-surface-above-ring',
              'stalk-surface-below-ring',
              'stalk-color-above-ring',
              'stalk-color-below-ring',
              'ring-type',
              'spore-print-color',
            ],
            Values: [
              [
                '',
                't',
                'p',
                'n',
                'k',
                's',
                's',
                'w',
                'w',
                'p',
                'k',
              ],
            ],
          },
        },
        GlobalParameters: {},
      }

    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Hongos</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Row>

        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  onAzureRequest: PropTypes.func,
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
