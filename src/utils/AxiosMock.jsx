import { useEffect } from "react";
import mock from "xhr-mock";

const AxiosMock = ({ children, config }) => {
  mock.setup();
  config(mock);

  useEffect(() => () => {
    mock.teardown();
    mock.reset();
  });

  return children;
};

export default AxiosMock;
