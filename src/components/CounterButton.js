import React from 'react';
import { connect } from 'react-redux';
import { increment } from 'redux/counterButton/button-action';

function CounterButton({ clicks, onClick }) {
  return (
    <div className="counterButtonBachground">
      <h2>кнопка мемоизации</h2>
      <button type="button" onClick={onClick}>
        Кликнули {clicks} раз
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  clicks: state.counterButton.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
