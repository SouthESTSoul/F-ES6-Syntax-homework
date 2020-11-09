const inject = (items, sections) => {
  const result = [];
  items.forEach((key, i) => {
	const section = sections.find(({index}) => index == i);
	if(section){
	  result.push(section.content)
	}
	result.push(key);
  });
  return result;
}
export {inject};
