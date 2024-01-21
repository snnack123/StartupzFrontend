/* eslint-disable react/prop-types */
import { ErrorMessage } from 'formik';

const ErrorMessageComponent = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <div className="errorMessage">{msg}</div>}
  </ErrorMessage>
);

export default ErrorMessageComponent;