const parseData = (resource) => {
  const {data, column} = resource;
  const keys = column.map(c => c.name)
  return data.map(values => createObject(keys, values))
};

const createObject = (keys, values)=> {
  const obj = {};
  keys.forEach((key, i) => {
	obj[key] = values[i];
  });
  return obj;
};



export {parseData};
