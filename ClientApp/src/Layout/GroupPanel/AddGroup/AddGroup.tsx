import React, { useEffect, useState } from "react";

const AddGroup: React.FC = () => {
  const [ groups, setGroups] = useState<IGroup[]>([])
  
  return <h5>Hello from addGroup</h5>;
};

export default AddGroup;
