import React from 'react';

const ContextComponent = React.createContext({
    addNewProjectItem: () => {},
    projects: []
})

export default ContextComponent