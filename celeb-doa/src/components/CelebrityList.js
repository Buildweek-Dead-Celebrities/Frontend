import React, { useEffect } from "react";
import { getCelebrity } from "../actions";
import CelebrityDisplay from "./CelebrityDisplay";
import { connect } from "react-redux";

// This component is to pull in current celebrity data
// Will allow user to delete or update a celebrity
// connected to redux store

const CelebrityList = props => {
  useEffect(() => {
    props.getCelebrity();
  }, []);

  if (props.isFetching) {
    return <h2>Celebrity Data is being loaded...</h2>;
  }
  return (
    <div className="celebrity-list">
      {props.error && <p>{props.error}</p>}
      {props.celeb.map(celebs => (
        <CelebrityDisplay key={celebs.id} celeb={celebs} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    celeb: state.celeb,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getCelebrity }
)(CelebrityList);
