Working with form elements (Controlled components):
1) User gives an input to current elements defined in view
2) Captured changes from event handler and updates the state
3) New values from state updates the view
4) User sees the updated view (values from state)

Uncontrolled Components:
Means the value property isn't set by the react library (State or props). When this happens, the component's internal value(state) may differ from the value of components representation(view).

Using References to access values:
1) Ref can be set on an element e.g. <input ref="userEmail"/>
2) Then ref can be passed in the find dom node method to get the node
let fd = ReactDOM.findDOMNode(this.refs.userEmail) to get the node
3) Then vwe can get the value from the node
let email = ReactDOM.findDOMNode(this.refs.userEmail).value

Refs can used with controlled or uncontrolled components

Default Values
The defaultValue React feature is most often used with uncontrolled components.
<input defaultValue="Good Book"/>