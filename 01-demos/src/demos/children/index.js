import React from 'react'

function ChildrenDemo(props) {
  console.log(props.children)
  return React.Children.map(props.children, c => [c, [c, c]])
}
export default () => (
  <ChildrenDemo> 
    <span>1</span>
    <span>2</span>
  </ChildrenDemo>
)
