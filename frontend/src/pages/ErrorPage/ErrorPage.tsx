import React from 'react';


class ErrorPage extends React.Component {

  render() {
    return (<div className="d-flex flex-column flex-root" style={{height: "100%"}}>
      <div className="error error-6 d-flex flex-row-fluid bgi-size-cover bgi-position-center">
        <div className="d-flex flex-column flex-row-fluid text-center">
          <h1 className="error-title font-weight-boldest text-white mb-12" style={{marginTop: "12rem"}}>Oops...</h1>
          <p className="display-4 font-weight-bold text-white">Looks like something went wrong.We're working on it</p>
        </div>
      </div>
    </div>)
  }
}

export default ErrorPage;