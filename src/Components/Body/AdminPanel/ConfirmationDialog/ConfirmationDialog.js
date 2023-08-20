import React, { useEffect, useState } from 'react';
import './ConfirmationDialogue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

function ConfirmationDialog({ userInput, handleOk, handleCancel, identify }) {
  const message = 'You are about to add the following details to the database:';
  const object = userInput;

  let labelMapping = {};
  const [disabled, setDisabled] = useState(false);
  const [added, setAdded] = useState(false);
  const [notadded, setnotAdded] = useState(false);

  const localhandleOk = () => {
    setDisabled(true);
    setAdded(true);
    setTimeout(() => {
      handleOk(userInput);
    }, 1500);
  };

  const localhandleCancel = () => {
    setDisabled(true);
    setnotAdded(true);
    setTimeout(() => {
      handleCancel();
    }, 1500);
  };

  if (identify === 0) {
    labelMapping = {
      school_name: 'School Name',
      degree: 'Degree Program',
      activities: 'Activities',
      skills: 'Skills',
      duration: 'Time Period',
      country: 'Country',
      timetaken: 'Time Spent',
    };
  } else if (identify === 1) {
    labelMapping = {
      company_name: 'Company',
      role: 'Role',
      description: 'Description',
      skills: 'Skills',
      duration: 'Time Period',
      // Define mapping for identify 1
    };
  } else if (identify === 2) {
    labelMapping = {
      title: 'Title',
      description: 'Description',
      stacks: 'Tech Stacks',
      year: 'Year',
      rank: 'Rank',
      code: 'Github Link',
      link: 'Link',
      image: 'Image Link',
    };
  }

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <div className={`table-container ${fadeIn ? 'fade-in' : ''}`}>
        {Object.entries(object).length > 0 && (
          <table>
            <tbody>
              <tr>
                <th>Entry</th>
                <th>Value</th>
              </tr>
              {Object.entries(object).map(([key, value]) => (
                <tr key={key}>
                  <td>{labelMapping[key]}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <p>Press confirm to proceed or cancel otherwise.</p>

      <div className="confirm-or-cancel">
        <button
          className={`confirm-button ${disabled ? 'disabled-button' : ''}`}
          onClick={() => localhandleOk()}
          disabled={disabled}
        >
          Confirm
        </button>

        <button
          className={`cancel-button ${disabled ? 'disabled-button' : ''}`}
          onClick={() => localhandleCancel()}
          disabled={disabled}
        >
          Cancel
        </button>
      </div>
      {added && (
        <div className="success">
          <FontAwesomeIcon icon={faSpinner} size="1x" spin style={{ color: 'yellow' }} /> Adding record to database.
          Please wait to be redirected to the relevant page!
        </div>
      )}
      {notadded && (
        <div className="success">
          <FontAwesomeIcon icon={faTimes} size="1x" style={{ color: 'red' }} /> There was some issue posting data to
          the database; please try again in some time.
        </div>
      )}
    </div>
  );
}

export default ConfirmationDialog;
