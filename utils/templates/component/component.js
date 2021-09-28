module.exports = (kebabCaseName, paschalCaseName) => ({
  content: `// Generated with util/create-component.js

import React from "react";
import PropTypes from "prop-types"; 
import styles from "./${kebabCaseName}.module.scss";


const ${paschalCaseName} = ({ 
  ...props
}) => {
  return (
    <div data-testid="${kebabCaseName}" className={styles['${kebabCaseName}']}>
      //add component render here
    </div>
  ) 
};

export default ${paschalCaseName};

${paschalCaseName}.propTypes = {
  //add Proptypes here
}
${paschalCaseName}.defaultProps = {
  //add defualt values
}
`,
  extension: `.jsx`,
});
